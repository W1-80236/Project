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

    private int qty1 = 0;
    private int qty2 = 0;
    private int qty3 = 0;
    private int qty4 = 0;
    private int qty5 = 0;
    private int qty6 = 0;
    private int qty7 = 0;
    private int qty8 = 0;
    private int qty9 = 0;
    private int qty10 = 0;
    private int qty11 = 0;
    private int qty12 = 0;
    private int qty13 = 0;
    private int qty14 = 0;
    private int qty15 = 0;
    TextView text1, text2, text3;
    TextView quantity1, quantity2, quantity3, quantity4, quantity5, quantity6, quantity7, quantity8, quantity9, quantity10, quantity11, quantity12, quantity13, quantity14, quantity15;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_non_veg_menu);
        toolBar = findViewById(R.id.toolBar);
        quantity1 = findViewById(R.id.quantity1);
        quantity2 = findViewById(R.id.quantity2);
        quantity3 = findViewById(R.id.quantity3);
        quantity4 = findViewById(R.id.quantity4);
        quantity5 = findViewById(R.id.quantity5);
        quantity6 = findViewById(R.id.quantity6);
        quantity7 = findViewById(R.id.quantity7);
        quantity8 = findViewById(R.id.quantity8);
        quantity9 = findViewById(R.id.quantity9);
        quantity10 = findViewById(R.id.quantity10);
        quantity11 = findViewById(R.id.quantity11);
        quantity12 = findViewById(R.id.quantity12);
        quantity13 = findViewById(R.id.quantity13);
        quantity14 = findViewById(R.id.quantity14);
        quantity15 = findViewById(R.id.quantity15);

        setSupportActionBar(toolBar);
        getSupportActionBar().setTitle("              Carnival Restaurant");
    }

    public void NonVegMenu(View view) {
        startActivity(new Intent(this, VegMenuActivity.class));
    }
    public void decreasing1(View view) {
        if (qty1 > 0) {
            qty1--;
            quantity1.setText(String.valueOf(qty1));
        }
    }

    public void increasing1(View view) {
        qty1++;
        quantity1.setText(String.valueOf(qty1));
    }

    public void decreasing2(View view) {
        if (qty2 > 0) {
            qty2--;
            quantity2.setText(String.valueOf(qty2));
        }
    }

    public void increasing2(View view) {
        qty2++;
        quantity2.setText(String.valueOf(qty2));
    }

    public void decreasing3(View view) {
        if (qty3 > 0) {
            qty3--;
            quantity3.setText(String.valueOf(qty3));
        }
    }

    public void increasing3(View view) {
        qty3++;
        quantity3.setText(String.valueOf(qty3));
    }

    public void decreasing4(View view) {
        if (qty4 > 0) {
            qty4--;
            quantity4.setText(String.valueOf(qty4));
        }
    }

    public void increasing4(View view) {
        qty4++;
        quantity4.setText(String.valueOf(qty4));
    }

    public void decreasing5(View view) {
        if (qty5 > 0) {
            qty5--;
            quantity5.setText(String.valueOf(qty5));
        }
    }

    public void increasing5(View view) {
        qty5++;
        quantity5.setText(String.valueOf(qty5));
    }

    public void decreasing6(View view) {
        if (qty6 > 0) {
            qty6--;
            quantity6.setText(String.valueOf(qty6));
        }
    }

    public void increasing6(View view) {
        qty6++;
        quantity6.setText(String.valueOf(qty6));
    }

    public void decreasing7(View view) {
        if (qty7 > 0) {
            qty7--;
            quantity7.setText(String.valueOf(qty7));
        }
    }

    public void increasing7(View view) {
        qty7++;
        quantity7.setText(String.valueOf(qty7));
    }

    public void decreasing8(View view) {
        if (qty8 > 0) {
            qty8--;
            quantity8.setText(String.valueOf(qty8));
        }
    }

    public void increasing8(View view) {
        qty8++;
        quantity8.setText(String.valueOf(qty8));
    }

    public void decreasing9(View view) {
        if (qty9 > 0) {
            qty9--;
            quantity9.setText(String.valueOf(qty9));
        }
    }

    public void increasing9(View view) {
        qty9++;
        quantity9.setText(String.valueOf(qty9));
    }

    public void decreasing10(View view) {
        if (qty10 > 0) {
            qty10--;
            quantity10.setText(String.valueOf(qty10));
        }
    }

    public void increasing10(View view) {
        qty10++;
        quantity10.setText(String.valueOf(qty10));
    }

    public void decreasing11(View view) {
        if (qty11 > 0) {
            qty11--;
            quantity11.setText(String.valueOf(qty11));
        }
    }

    public void increasing11(View view) {
        qty11++;
        quantity11.setText(String.valueOf(qty11));
    }

    public void decreasing12(View view) {
        if (qty12 > 0) {
            qty12--;
            quantity12.setText(String.valueOf(qty12));
        }
    }

    public void increasing12(View view) {
        qty12++;
        quantity12.setText(String.valueOf(qty12));
    }

    public void decreasing13(View view) {
        if (qty13 > 0) {
            qty13--;
            quantity13.setText(String.valueOf(qty13));
        }
    }

    public void increasing13(View view) {
        qty13++;
        quantity13.setText(String.valueOf(qty13));
    }

    public void decreasing14(View view) {
        if (qty14 > 0) {
            qty14--;
            quantity14.setText(String.valueOf(qty14));
        }
    }

    public void increasing14(View view) {
        qty14++;
        quantity14.setText(String.valueOf(qty14));
    }

    public void decreasing15(View view) {
        if (qty15 > 0) {
            qty15--;
            quantity15.setText(String.valueOf(qty15));
        }
    }

    public void increasing15(View view) {
        qty15++;
        quantity15.setText(String.valueOf(qty15));
    }
}

