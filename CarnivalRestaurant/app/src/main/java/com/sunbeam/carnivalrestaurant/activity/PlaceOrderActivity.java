package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.sunbeam.carnivalrestaurant.R;

public class PlaceOrderActivity extends AppCompatActivity {
    TextView textTotal, textQuantity;
    Button btnPlaceOrder;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_place_order);
        textTotal = findViewById(R.id.textTotal);
       textQuantity = findViewById(R.id.textQuantity);
        btnPlaceOrder = findViewById(R.id.btnPlaceOrder);
        btnPlaceOrder.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Intent intent = new Intent();
               float total=getIntent().getIntExtra("total",0);
                int totalQuantity = getIntent().getIntExtra("totalQuantity",0);
               Log.e("PlaceOrderACtivity",totalQuantity+"  "+total);
    }
});
    }
    public void showBill(View view) {
        Intent intent = new Intent(PlaceOrderActivity.this, BillActivity.class);
        startActivity(intent);
    }
    public void back(View view) {
        Intent intent = new Intent(PlaceOrderActivity.this, MainActivity.class);
        startActivity(intent);
    }
}