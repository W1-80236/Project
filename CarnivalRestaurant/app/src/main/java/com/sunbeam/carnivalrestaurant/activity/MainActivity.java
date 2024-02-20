package com.sunbeam.carnivalrestaurant.activity;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import com.sunbeam.carnivalrestaurant.R;
import com.sunbeam.carnivalrestaurant.utility.CarnivalConstants;

public class MainActivity extends AppCompatActivity {
    Toolbar toolbar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        toolbar = findViewById(R.id.toolBar);
        setSupportActionBar(toolbar);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        if(getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME,MODE_PRIVATE)
                .getBoolean(CarnivalConstants.LOGIN_STATUS,false))
            menu.add("logout").setIcon(R.drawable.logout).setShowAsAction(MenuItem.SHOW_AS_ACTION_ALWAYS);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        getSharedPreferences(CarnivalConstants.SHARED_PREFERENCE_FILE_NAME,MODE_PRIVATE)
                .edit()
                .putBoolean(CarnivalConstants.LOGIN_STATUS,false)
                .apply();
        finish();
        return super.onOptionsItemSelected(item);
    }

    public void menu(View view){
        startActivity(new Intent(this, MenuActivity.class));
    }

//    public void sendNotification(View view) {
//        //create channel for the notification
//        NotificationChannel notificationChannel = new NotificationChannel("channel_id", "channel_name", NotificationManager.IMPORTANCE_DEFAULT);
//
//        //cretae the object of Notification manager
//        NotificationManager notificationManager = getSystemService(NotificationManager.class);
//
//        // register your notification channel towards the Notification Manager
//        notificationManager.createNotificationChannel(notificationChannel);
//
//        // cretae the way we want the notification
//        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, "channel_id");
//        builder.setSmallIcon(R.drawable.logo);
//        builder.setContentTitle("Carnival Restaurant");
//        builder.setContentText("Payment Received! Thank you for visiting visit Again!! ");
//
//        // NotificationManagerCompat object used to send the notification
//        NotificationManagerCompat notificationManagerCompat = NotificationManagerCompat.from(this);
//        if (ActivityCompat.checkSelfPermission(this, android.Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
//            return;
//        }
//        notificationManagerCompat.notify(1, builder.build());

   // }

    }