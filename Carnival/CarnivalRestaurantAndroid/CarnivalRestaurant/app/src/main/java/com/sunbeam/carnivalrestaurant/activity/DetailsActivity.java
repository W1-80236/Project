package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.api.API;
import com.sunbeam.carnivalrestaurant.entity.Food;

public class DetailsActivity extends AppCompatActivity {
    Toolbar toolBar;
    TextView textName, textPrice, textQuantity;
    ImageView imageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);
        toolBar = findViewById(R.id.toolBar);
        setSupportActionBar(toolBar);
        getSupportActionBar().setTitle("              Carnival Restaurant");
        imageView=findViewById(R.id.imageView);
        textName = findViewById(R.id.textName);
        textPrice = findViewById(R.id.textPrice);
        textQuantity = findViewById(R.id.textQuantity);
        Food food = (Food) getIntent().getSerializableExtra("food");

        Log.e("food",food.toString());

        Glide.with(this).load(API.BASE_URL+"/food_tb/images/"+food.getImage()).into(imageView);

        textName.setText("Name : " + food.getFood_name());
        textPrice.setText("Price : " + "₹ "+food.getFood_price());
        textQuantity.setText("Description : " + food.getQuantity());


    }
}