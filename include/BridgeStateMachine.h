#pragma once
#include <Arduino.h>

class DetectionSystem;
class SafetyManager;
class MotorControl;
class SignalControl;
class LocalStateIndicator;
class SocketServer;

enum class BridgeState {
    IDLE,
    WAITING_FOR_BOAT,
    WAITING_FOR_BOAT_TO_PASS,
    OPENING_BRIDGE,
    CLOSING_BRIDGE,
    STOPPING_TRAFFIC,
    RESUMING_TRAFFIC,
    FAULT,
    MANUAL_MODE
};

enum class BridgeEvent {
    BOAT_DETECTED_UPSTREAM,
    BOAT_DETECTED_DOWNSTREAM,
    BOAT_PASSED_UPSTREAM,
    BOAT_PASSED_DOWNSTREAM,
    OPEN_COMMAND_RECEIVED,
    CLOSE_COMMAND_RECEIVED,
    BRIDGE_OPENED,
    BRIDGE_CLOSED,
    BRIDGE_CLEAR,
    TRAFFIC_STOPPED,
    TRAFFIC_RESUMED,
    FAULT_DETECTED,
    FAULT_CLEARED,
    MANUAL_MODE_ACTIVATED,
    MANUAL_MODE_DEACTIVATED,
    TIMEOUT,
};

struct StateTransition {
    BridgeState currentState;
    BridgeEvent event;
    BridgeState nextState;
};

class BridgeStateMachine {
    public:
        BridgeStateMachine();
        void begin();
        void update();
        void handleEvent(BridgeEvent event);

        BridgeState getCurrentState() const {
            return currentState;
        }
        String getStateString() const;
        String getEventString(BridgeEvent event) const;

    private:
        BridgeState currentState;
        BridgeState previousState;
        unsigned long stateEntryTime; // Timestamp when the current state was entered (for timeouts)
};
