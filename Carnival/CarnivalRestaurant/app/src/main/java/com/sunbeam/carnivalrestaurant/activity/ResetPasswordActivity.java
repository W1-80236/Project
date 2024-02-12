package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.api.RetrofitClient;
import com.sunbeam.carnivalrestaurant.entity.Customer;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ResetPasswordActivity extends AppCompatActivity {
    EditText editPassword, editConfirmPassword, editEmail;
    Customer customer = new Customer();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_reset_password);
        editPassword = findViewById(R.id.editPassword);
        editEmail = findViewById(R.id.editEmail);
        editConfirmPassword = findViewById(R.id.editConfirmPassword);
    }

    public void changePassword(View view) {
        String email = editEmail.getText().toString();
        String newPwd = editPassword.getText().toString();
        String confPwd = editConfirmPassword.getText().toString();

        if (!newPwd.equals(confPwd)) {
            Toast.makeText(this, "Passwords do not match", Toast.LENGTH_SHORT).show();
            return;
        } else {
            customer.setPassword(confPwd);

            RetrofitClient.getInstance().getApi().editPassword(email, customer).enqueue(new Callback<JsonObject>() {
                @Override
                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                    Log.e("API", String.valueOf(response));
                    Log.e("API", email);
                    Log.e("API", confPwd);
                    Log.e("API", customer.toString());

                    if (response.isSuccessful() && response.body() != null && email==customer.getEmail()) {
                        Toast.makeText(ResetPasswordActivity.this, "Password changed successfully", Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(ResetPasswordActivity.this, LoginActivity.class));
                        finish();
                    } else {
                        Toast.makeText(ResetPasswordActivity.this, "please enter registered email", Toast.LENGTH_SHORT).show();
                    }
                }

                @Override
                public void onFailure(Call<JsonObject> call, Throwable t) {
                    Toast.makeText(ResetPasswordActivity.this, "Error: " + t.getMessage(), Toast.LENGTH_SHORT).show();
                }
            });
        }
    }
    public void back (View view){
            startActivity(new Intent(this, LoginActivity.class));
            finish();
        }
    }
