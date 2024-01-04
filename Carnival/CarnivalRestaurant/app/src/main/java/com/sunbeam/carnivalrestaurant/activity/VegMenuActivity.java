package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.sunbeam.carnivalrestaurant.R;

public class VegMenuActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_veg_menu);
    }
    public void nonVegMenu(View view)
    {

        startActivity(new Intent(this, NonVegMenuActivity.class));
    }

    public void placedOrder(View view)
    {
        startActivity(new Intent(this, DetailsActivity.class));
    }
}