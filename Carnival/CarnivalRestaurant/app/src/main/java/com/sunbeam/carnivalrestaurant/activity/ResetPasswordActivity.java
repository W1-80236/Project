package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.entity.Customer;

public class ResetPasswordActivity extends AppCompatActivity {
EditText editPassword, editConfirmPassword;
Customer customer = new Customer();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_reset_password);
        editPassword = findViewById(R.id.editPassword);
        editConfirmPassword = findViewById(R.id.editConfirmPassword);

    }
    public void changePassword(View view){

//        String newpwd = editPassword.getText().toString();
//        String confpwd = editConfirmPassword.getText().toString();
//        if(newpwd.equals(confpwd)){
//
//        }
        startActivity(new Intent(this, LoginActivity.class));
    }
    public void back(View view){

        startActivity(new Intent(this, LoginActivity.class));
    }
}