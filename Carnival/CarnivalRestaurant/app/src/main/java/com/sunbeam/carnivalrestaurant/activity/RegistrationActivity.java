package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Patterns;
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

public class RegistrationActivity extends AppCompatActivity {
    EditText editFName, editLName, editEmail, editPassword, editMobile, editConfirmPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registration);
        editFName = findViewById(R.id.editFName);
        editLName = findViewById(R.id.editLName);
        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);
        editConfirmPassword = findViewById(R.id.editConfirmPassword);
        editMobile = findViewById(R.id.editMobile);
    }

    public void register(View view) {
        String fName = editFName.getText().toString().trim();
        String lName = editLName.getText().toString().trim();
        String email = editEmail.getText().toString().trim();
        String mobile = editMobile.getText().toString().trim();
        String password = editPassword.getText().toString().trim();
        String confirmPassword = editConfirmPassword.getText().toString().trim();

        if (TextUtils.isEmpty(fName) || TextUtils.isEmpty(lName) || TextUtils.isEmpty(email) ||
                TextUtils.isEmpty(mobile) || TextUtils.isEmpty(password) || TextUtils.isEmpty(confirmPassword)) {
            Toast.makeText(this, "All fields are compulsory", Toast.LENGTH_SHORT).show();
            return;
        }

        if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            Toast.makeText(this, "Invalid email address", Toast.LENGTH_SHORT).show();
            return;
        }

        if (!TextUtils.isDigitsOnly(mobile) || mobile.length() != 10) {
            Toast.makeText(this, "Mobile number must be 10 digits", Toast.LENGTH_SHORT).show();
            return;
        }

        if (!password.equals(confirmPassword)) {
            Toast.makeText(this, "Passwords do not match", Toast.LENGTH_SHORT).show();
            return;
        }

        Customer customer = new Customer();
        customer.setCust_first_name(fName);
        customer.setCust_last_name(lName);
        customer.setEmail(email);
        customer.setMobile_no(mobile);
        customer.setPassword(password);

        RetrofitClient.getInstance().getApi().registerCustomer(customer).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                if (response.isSuccessful() && response.body() != null) {
                    if (response.body().get("status").getAsString().equals("success")) {
                        Toast.makeText(RegistrationActivity.this, "Registered Successfully!", Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(RegistrationActivity.this, LoginActivity.class));
                        finish();
                    } else {
                        if (response.body().get("error").getAsJsonObject().get("errno").getAsInt() == 1062)
                            Toast.makeText(RegistrationActivity.this, "Email already exists", Toast.LENGTH_SHORT).show();
                        if (response.body().get("error").getAsJsonObject().get("errno").getAsInt() == 1406)
                            Toast.makeText(RegistrationActivity.this, "Mobile number is incorrect", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    Toast.makeText(RegistrationActivity.this, "Failed to register. Please try again.", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(RegistrationActivity.this, "Something went wrong while registration", Toast.LENGTH_SHORT).show();
            }
        });
    }

    public void cancel(View view) {
        startActivity(new Intent(this, LoginActivity.class));
        finish();
    }
}
