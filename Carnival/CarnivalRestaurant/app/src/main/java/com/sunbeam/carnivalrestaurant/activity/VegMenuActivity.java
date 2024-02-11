package com.sunbeam.carnivalrestaurant.activity;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.google.gson.JsonObject;
import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.api.RetrofitClient;
import com.sunbeam.carnivalrestaurant.entity.Food;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class VegMenuActivity extends AppCompatActivity {
    TextView textIdli;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_veg_menu);
      //  textIdli=findViewById(R.id.textIdli);
        setupButtonClickListeners();

    }

    private void setupButtonClickListeners() {
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

    public void nonvegMenu(View view)
    {
        startActivity(new Intent(this, NonVegMenuActivity.class));
    }

    public void placedOrder(View view)
    {
        Food food = new Food();
        food.setFood_name(textIdli.getText().toString());
        startActivity(new Intent(this, DetailsActivity.class));


    }



    }

