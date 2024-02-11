package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
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
EditText editFName, editLName, editEmail,editPassword,editMobile, editConfirmPassword;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registration);
        editFName = findViewById(R.id.editFName);
        editLName = findViewById(R.id.editLName);
        editEmail =  findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);
        editConfirmPassword = findViewById(R.id.editConfirmPassword);
        editMobile = findViewById(R.id.editMobile);
    }
    public void register(View view){
        Customer customer = new Customer();
        customer.setCust_first_name(editFName.getText().toString());
        customer.setCust_last_name(editLName.getText().toString());
        customer.setEmail(editEmail.getText().toString());
        customer.setMobile_no(editMobile.getText().toString());
        customer.setPassword(editPassword.getText().toString());
       startActivity(new Intent(this, LoginActivity.class));
       if(customer.getEmail().equals("") || customer.getPassword().equals(""))
            Toast.makeText(this, "email or password cannot be empty", Toast.LENGTH_SHORT).show();
       else {
            RetrofitClient.getInstance().getApi().registerCustomer(customer).enqueue(new Callback<JsonObject>() {
                @Override
                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                    if(response.body().get("status").getAsString().equals("success")){
                        finish();
                    }
                    else {
                        if (response.body().get("error").getAsJsonObject().get("errno").getAsInt() == 1062)
                            Toast.makeText(RegistrationActivity.this, "email already exists", Toast.LENGTH_SHORT).show();
                        if (response.body().get("error").getAsJsonObject().get("errno").getAsInt() == 1406)
                            Toast.makeText(RegistrationActivity.this, "mobile number is incorrect", Toast.LENGTH_SHORT).show();
                    }
                }

                @Override
                public void onFailure(Call<JsonObject> call, Throwable t) {
                    Toast.makeText(RegistrationActivity.this, "Something went wrong while registration", Toast.LENGTH_SHORT).show();
               }
           });
       }
    }
    public void cancel(View view){
       startActivity(new Intent(this, LoginActivity.class));
        finish();
    }
}