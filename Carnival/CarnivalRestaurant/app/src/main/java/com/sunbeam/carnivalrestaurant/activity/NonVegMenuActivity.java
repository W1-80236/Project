package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.sunbeam.carnivalrestaurant.R;

public class NonVegMenuActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_non_veg_menu);

        // Initialize and set up click listeners for each item's buttons
        setupButtonClickListeners();
    }

    private void setupButtonClickListeners() {
        // Initialize and set up click listeners for each item's buttons
        for (int i = 0; i < 15; i++) {
            final int index = i;
            Button increaseButton = findViewById(getResources().getIdentifier("i" + (index + 1), "id", getPackageName()));
            Button decreaseButton = findViewById(getResources().getIdentifier("d" + (index + 1), "id", getPackageName()));
            final TextView quantityTextView = findViewById(getResources().getIdentifier("quantity" + (index + 1), "id", getPackageName()));

            increaseButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    increaseQuantity(index, quantityTextView);
                }
            });

            decreaseButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    decreaseQuantity(index, quantityTextView);
                }
            });
        }
    }

    private void increaseQuantity(int index, TextView quantityTextView) {
        int currentQuantity = Integer.parseInt(quantityTextView.getText().toString());
        currentQuantity++;
        quantityTextView.setText(String.valueOf(currentQuantity));
    }

    private void decreaseQuantity(int index, TextView quantityTextView) {
        int currentQuantity = Integer.parseInt(quantityTextView.getText().toString());
        if (currentQuantity > 0) {
            currentQuantity--;
            quantityTextView.setText(String.valueOf(currentQuantity));
        }
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