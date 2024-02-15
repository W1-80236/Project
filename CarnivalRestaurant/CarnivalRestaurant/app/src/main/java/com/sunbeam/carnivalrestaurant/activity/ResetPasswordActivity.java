package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.entity.Customer;

public class ResetPasswordActivity extends AppCompatActivity {
    Toolbar toolBar;
EditText editPassword, editConfirmPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        toolBar = findViewById(R.id.toolBar);
       setSupportActionBar(toolBar);
       getSupportActionBar().setTitle("              Carnival Restaurant");
        setContentView(R.layout.activity_reset_password);
        editPassword = findViewById(R.id.editPassword);
        editConfirmPassword = findViewById(R.id.editConfirmPassword);

    }
    public void changePassword(View view){
        startActivity(new Intent(this, LoginActivity.class));
    }
    public void back(View view){

        startActivity(new Intent(this, LoginActivity.class));
    }
}