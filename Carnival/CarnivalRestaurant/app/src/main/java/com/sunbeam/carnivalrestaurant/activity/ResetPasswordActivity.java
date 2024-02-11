package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

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
<<<<<<< HEAD
    EditText editPassword, editConfirmPassword, editMobile;
    Customer customer = new Customer();

=======
    Toolbar toolBar;
EditText editPassword, editConfirmPassword;

Customer customer = new Customer();
>>>>>>> origin/main
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        toolBar = findViewById(R.id.toolBar);
       // setSupportActionBar(toolBar);
       // getSupportActionBar().setTitle("              Carnival Restaurant");
        setContentView(R.layout.activity_reset_password);
        editPassword = findViewById(R.id.editPassword);
        editMobile = findViewById(R.id.editMobile);
        editConfirmPassword = findViewById(R.id.editConfirmPassword);
    }

    public void changePassword(View view) {
        String mobileNo = editMobile.getText().toString();
        String newPwd = editPassword.getText().toString();
        String confPwd = editConfirmPassword.getText().toString();
        customer.setPassword(confPwd);

        if (!newPwd.equals(confPwd)) {
            Toast.makeText(this, "Passwords do not match", Toast.LENGTH_SHORT).show();
            return;
        }

        RetrofitClient.getInstance().getApi().editPassword(mobileNo, customer).enqueue(new Callback<JsonObject>() {

            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                Log.e("API", String.valueOf(response));
                Log.e("API", mobileNo);Log.e("API", confPwd);
                Log.e("API", mobileNo);Log.e("API", String.valueOf(customer));
                if (response.isSuccessful()) {
                    Toast.makeText(ResetPasswordActivity.this, "Password changed successfully", Toast.LENGTH_SHORT).show();
                    startActivity(new Intent(ResetPasswordActivity.this, LoginActivity.class));
                    finish();
                } else {
                    Toast.makeText(ResetPasswordActivity.this, "Failed to change password", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(ResetPasswordActivity.this, "Error: " + t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }

    public void back(View view) {
        startActivity(new Intent(this, LoginActivity.class));
        finish();
    }
}