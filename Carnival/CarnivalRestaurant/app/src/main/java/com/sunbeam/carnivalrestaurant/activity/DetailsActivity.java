package com.sunbeam.carnivalrestaurant.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
<<<<<<< HEAD
=======

>>>>>>> origin/main
import android.os.Bundle;

import com.sunbeam.carnivalrestaurant.R;

public class DetailsActivity extends AppCompatActivity {
    Toolbar toolBar;
<<<<<<< HEAD
=======

>>>>>>> origin/main
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);
        toolBar = findViewById(R.id.toolBar);
        setSupportActionBar(toolBar);
        getSupportActionBar().setTitle("              Carnival Restaurant");
<<<<<<< HEAD
        int[] quantities = getIntent().getIntArrayExtra("quantities");
=======
>>>>>>> origin/main
    }
}