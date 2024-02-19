package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.adapter.NonVegListAdapter;
import com.sunbeam.carnivalrestaurant.api.RetrofitClient;
import com.sunbeam.carnivalrestaurant.entity.Customer;
import com.sunbeam.carnivalrestaurant.entity.Food;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class NonVegMenuActivity extends AppCompatActivity {


    Toolbar toolBar;
    NonVegListAdapter nonVegListAdapter;
    RecyclerView recyclerView;
    List<Food> nonVegList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_non_veg_menu);
        setSupportActionBar(toolBar);
        //getSupportActionBar().setTitle("             Carnival Restaurant");
        //nonVegList = new ArrayList<>();
        recyclerView = findViewById(R.id.recyclerView);
        nonVegList = new ArrayList<>();
        nonVegListAdapter = new NonVegListAdapter(this,nonVegList);
        recyclerView.setAdapter(nonVegListAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(this, 1));
    }



    public void nonVegMenu(View view) {
        startActivity(new Intent(this, VegMenuActivity.class));
    }
}