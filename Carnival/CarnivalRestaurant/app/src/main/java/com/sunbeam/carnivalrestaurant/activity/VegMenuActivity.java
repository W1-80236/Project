package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;


import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.TextView;

import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.adapter.NonVegListAdapter;
import com.sunbeam.carnivalrestaurant.adapter.VegListAdapter;
import com.sunbeam.carnivalrestaurant.entity.Food;
import com.sunbeam.carnivalrestaurant.entity.Order;

import java.util.ArrayList;
import java.util.List;

public class VegMenuActivity extends AppCompatActivity {


    VegListAdapter vegListAdapter;
    RecyclerView recyclerView;
    Toolbar toolBar;
    List<Food> vegList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_veg_menu);
        toolBar = findViewById(R.id.toolBar);
        setSupportActionBar(toolBar);
        getSupportActionBar().setTitle("              Carnival Restaurant");

        recyclerView = findViewById(R.id.recyclerView);
        vegList = new ArrayList<>();
        vegListAdapter = new VegListAdapter(this, vegList);
        recyclerView.setAdapter(vegListAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(this, 1));
     addSampleItems();

    }
    private void addSampleItems() {

        vegList.add(new Food(2, "Gobi-Manchurian",40,"Veg"));
        vegList.add(new Food(3, "Medu-Vada",30,"veg"));
        vegListAdapter.notifyDataSetChanged();
    }

    public void nonVegMenu(View view) {
        startActivity(new Intent(this, NonVegMenuActivity.class));
    }

}