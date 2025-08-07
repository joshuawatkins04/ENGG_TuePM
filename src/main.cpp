#include <Arduino.h>
#include "SocketServer.h"
#include "credentials.h"

#define LED_BUILTIN 2

SocketServer socketServer(1234);

void setup() {
    Serial.begin(115200);
    delay(1000);
    Serial.println("======= ESP32 Starting Up =======");
    
    Serial.println("Establishing WiFi connection ->");
    socketServer.beginWiFi(WIFI_SSID, WIFI_PASSWORD);
    
    Serial.println("Starting socket server ->");
    socketServer.startServer();
    
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.println("Setup complete :)");
    Serial.println("=========================");
}

void loop() {
    socketServer.handleClients();
    socketServer.checkWiFiStatus();
    digitalWrite(LED_BUILTIN, HIGH);
    delay(2000);
    digitalWrite(LED_BUILTIN, LOW);
    delay(2000);
}