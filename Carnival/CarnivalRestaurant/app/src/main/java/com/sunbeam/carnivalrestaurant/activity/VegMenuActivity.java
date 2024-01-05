package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.sunbeam.carnivalrestaurant.R;

public class VegMenuActivity extends AppCompatActivity {

    Toolbar toolBar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_veg_menu);
        toolBar = findViewById(R.id.toolBar);
        setSupportActionBar(toolBar);
        getSupportActionBar().setTitle("              Carnival Restaurant");
    }
    public void NonVegMenu(View view)
    {

        startActivity(new Intent(this, NonVegMenuActivity.class));
    }

    public void PlacedOrder(View view)
    {
        startActivity(new Intent(this, DetailsActivity.class));
    }
}