#include "SocketServer.h"

SocketServer::SocketServer(uint16_t port) : server(port), port(port), lastStatusCheck(0) {}

void SocketServer::beginWiFi(const char* ssid, const char* password) {
    Serial.print("Connecting to WiFi network: ");
    Serial.println(ssid);
    
    WiFi.begin(ssid, password);
    
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.print(".");
    }
    
    Serial.println();
    Serial.println("WiFi connected successfully!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
}

void SocketServer::startServer() {
    server.begin();
    Serial.println("Socket server started successfully!");
    Serial.print("Server listening on port: ");
    Serial.println(port);
    Serial.print("Connect to: ");
    Serial.print(WiFi.localIP());
    Serial.print(":");
    Serial.println(port);
}

void SocketServer::handleClients() {
    WiFiClient client = server.available();
    if (client) {
        Serial.println("New client connected!");
        Serial.print("Client IP: ");
        Serial.println(client.remoteIP());
        
        while (client.connected()) {
            if (client.available()) {
                String msg = client.readStringUntil('\n');
                Serial.print("Received message: ");
                Serial.println(msg);
                
                String response = "{\"status\":\"acknowledged\"}";
                client.println(response);
                Serial.print("Sent response: ");
                Serial.println(response);
            }
        }
        client.stop();
        Serial.println("Client disconnected.");
    }
}

void SocketServer::checkWiFiStatus() {
    unsigned long currentTime = millis();
    
    if (currentTime - lastStatusCheck > 30000) {
        lastStatusCheck = currentTime;
        
        if (WiFi.status() != WL_CONNECTED) {
            Serial.println("WARNING: WiFi connection lost!");
            Serial.print("Current status: ");
            switch (WiFi.status()) {
                case WL_IDLE_STATUS:
                    Serial.println("Idle");
                    break;
                case WL_NO_SSID_AVAIL:
                    Serial.println("Network not available");
                    break;
                case WL_CONNECT_FAILED:
                    Serial.println("Connection failed");
                    break;
                case WL_CONNECTION_LOST:
                    Serial.println("Connection lost");
                    break;
                case WL_DISCONNECTED:
                    Serial.println("Disconnected");
                    break;
                default:
                    Serial.println("Unknown");
            }
            Serial.println("Attempting to reconnect ->");
            WiFi.reconnect();
        } else {
            Serial.println("WiFi Status: Connected");
        }
    }
}