package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.sunbeam.carnivalrestaurant.R;

public class NonVegMenuActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_non_veg_menu);
    }
    public void vegMenu(View view)
    {
        startActivity(new Intent(this, VegMenuActivity.class));
    }

    public void placedOrder(View view)
    {
        startActivity(new Intent(this, DetailsActivity.class));
    }
}