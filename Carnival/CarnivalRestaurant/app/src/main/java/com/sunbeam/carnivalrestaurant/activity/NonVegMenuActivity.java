package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.sunbeam.carnivalrestaurant.R;

public class NonVegMenuActivity extends AppCompatActivity {

    Toolbar toolBar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_non_veg_menu);
        toolBar = findViewById(R.id.toolBar);
        setSupportActionBar(toolBar);
        getSupportActionBar().setTitle("              Carnival Restaurant");
    }
    public void VegMenu(View view)
    {
        startActivity(new Intent(this, VegMenuActivity.class));
    }

    public void PlacedOrder(View view)
    {
        startActivity(new Intent(this, DetailsActivity.class));
    }
}