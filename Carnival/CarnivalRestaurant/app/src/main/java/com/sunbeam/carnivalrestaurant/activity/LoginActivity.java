package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.api.RetrofitClient;
import com.sunbeam.carnivalrestaurant.entity.Customer;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import com.sunbeam.carnivalrestaurant.utility.CarnivalConstants;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginActivity extends AppCompatActivity {
EditText editMobile, editPassword;
CheckBox checkboxRememberMe;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        editMobile = findViewById(R.id.editMobile);
        editPassword = findViewById(R.id.editPassword);
        checkboxRememberMe = findViewById(R.id.checkboxRememberMe);
    }
    public void login(View view){
//        Customer customer = new Customer();
//        customer.setMobile_no(editMobile.getText().toString());
//        customer.setPassword(editPassword.getText().toString());
//        if(checkboxRememberMe.isChecked()){
//            getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME,MODE_PRIVATE)
//                    .edit()
//                    .putBoolean(CarnivalConstants.LOGIN_STATUS,true)
//                    .apply();
//        }
//        RetrofitClient.getInstance().getApi().loginCustomer(customer).enqueue(new Callback<JsonObject>() {
//                        @Override
//                        public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
//                            if (response.body().get("status").getAsString().equals("success")) {
//                                JsonArray array = response.body().get("data").getAsJsonArray();
//                                if (array.size() != 0) {
//                                    int id = array.get(0).getAsJsonObject().get("id").getAsInt();
//                                    getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME, MODE_PRIVATE)
//                                            .edit()
//                                            .putInt(CarnivalConstants.CUSTOMER_ID, id)
//                                            .apply();
                                    startActivity(new Intent(LoginActivity.this, MainActivity.class));
//                                    finish();
//                                } else
//                                    Toast.makeText(LoginActivity.this, "mobileNo or password is incorrect", Toast.LENGTH_SHORT).show();
//                            }
//                        }
//
//                        @Override
//                        public void onFailure(Call<JsonObject> call, Throwable t) {
//                            Toast.makeText(LoginActivity.this, "Something went wrong at the Login", Toast.LENGTH_SHORT).show();
//                        }
//                    });
                }
    public void register(View view){
        startActivity(new Intent(this, RegistrationActivity.class));

    }
    public void ForgotPassword (View view){
        startActivity(new Intent(this, ResetPasswordActivity.class));

    }
}
