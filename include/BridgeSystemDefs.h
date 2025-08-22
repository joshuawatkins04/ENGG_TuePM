#pragma once

// System States
enum class BridgeState {
    IDLE,
    STOPPING_TRAFFIC,
    OPENING,
    OPEN,
    CLOSING,
    RESUMING_TRAFFIC,
    FAULT,
    MANUAL_MODE
};

// System Events
enum class BridgeEvent {
    // External Events
    BOAT_DETECTED,
    BOAT_PASSED,
    FAULT_DETECTED,
    FAULT_CLEARED,
    MANUAL_OVERRIDE_ACTIVATED,
    MANUAL_OVERRIDE_DEACTIVATED,

    // Success Events
    TRAFFIC_STOPPED_SUCCESS,
    BRIDGE_OPENED_SUCCESS,
    BRIDGE_CLOSED_SUCCESS,
    TRAFFIC_RESUMED_SUCCESS,
    SYSTEM_SAFE_SUCCESS,
    INDICATOR_UPDATE_SUCCESS
};

// System Command Targets
enum class CommandTarget {
    CONTROLLER,
    MOTOR_CONTROL,
    SIGNAL_CONTROL,
    LOCAL_STATE_INDICATOR
};

enum class CommandAction {
    // Controller Actions
    ENTER_SAFE_STATE,

    // MotorControl Actions
    RAISE_BRIDGE,
    LOWER_BRIDGE,

    // SignalControl Actions
    STOP_TRAFFIC,
    RESUME_TRAFFIC,

    // LocalStateIndicator Actions
    SET_STATE
};

// Command structure that is sent over the CommandBus.
struct Command {
    CommandTarget target;
    CommandAction action;
};
