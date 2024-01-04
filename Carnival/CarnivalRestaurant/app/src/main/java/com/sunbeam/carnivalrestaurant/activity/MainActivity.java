package com.sunbeam.carnivalrestaurant.activity;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.utility.CarnivalConstants;

public class MainActivity extends AppCompatActivity {
    Toolbar toolbar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        toolbar = findViewById(R.id.toolBar);
        setSupportActionBar(toolbar);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        if(getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME,MODE_PRIVATE)
                .getBoolean(CarnivalConstants.LOGIN_STATUS,false))
            menu.add("logout").setIcon(R.drawable.logout).setShowAsAction(MenuItem.SHOW_AS_ACTION_ALWAYS);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME,MODE_PRIVATE)
                .edit()
                .putBoolean(CarnivalConstants.LOGIN_STATUS,false)
                .apply();
        finish();
        return super.onOptionsItemSelected(item);
    }
    public void veg(View view){
        startActivity(new Intent(this, VegMenuActivity.class));
    }
    public void nonVeg(View view){
        startActivity(new Intent(this, NonVegMenuActivity.class));
    }
}