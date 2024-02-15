package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.sunbeam.carnivalrestaurant.R;

public class AddCartActivity extends AppCompatActivity {
    Toolbar toolBar;
    TextView foodItemNameTextView,quantityTextView,priceTextView,totalPriceTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_cart);
        toolBar = findViewById(R.id.toolBar);
        setSupportActionBar(toolBar);
        getSupportActionBar().setTitle("              Carnival Restaurant");
        foodItemNameTextView = findViewById(R.id.foodItemNameTextView);
        quantityTextView = findViewById(R.id.quantityTextView);
        priceTextView = findViewById(R.id.priceTextView);
        totalPriceTextView = findViewById(R.id.totalPriceTextView);
        Intent intent = getIntent();
        if (intent != null) {
            String foodItemName = intent.getStringExtra("foodItemName");
            int quantity = intent.getIntExtra("quantity",0);
            int price = intent.getIntExtra("price", 0);
            int totalPrice = price * quantity;

           foodItemNameTextView.setText("Food Item Name: " +String.valueOf(foodItemName));
            quantityTextView.setText("Quantity: " + String.valueOf(quantity));
            priceTextView.setText("Price per item: $" + String.valueOf(price));
            totalPriceTextView.setText("Total Price: $" + String.valueOf(totalPrice));
        }
    }

    public void placeOrder(View view)
    {
        startActivity(new Intent(this, DetailsActivity.class));
    }
}