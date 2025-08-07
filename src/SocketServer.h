#pragma once
#include <WiFi.h>

class SocketServer {
public:
    SocketServer(uint16_t port);
    void beginWiFi(const char* ssid, const char* password);
    void startServer();
    void handleClients();
    void checkWiFiStatus();
private:
    WiFiServer server;
    uint16_t port;
    unsigned long lastStatusCheck;
};
