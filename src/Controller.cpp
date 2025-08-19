/**
 * The Controller class will ensure that commands are routed
 * to the correct subsystem. This is done through a switch
 * statement that will check defined cases such as:
 * MOTOR_CONTROLLER, and will send send back to the 
 * EventBus the actual command it wants MotorControl to do
 * such as raiseBridge for example.
 * 
 * At its core, expression will be a st
 * 
 */

 string expression = "MOTOR_CONTROLLER raiseBridge"
 parts ...
 parts[0] = "MOTOR_CONTROLLER"
 parts[1] = "raiseBridge"

switch (parts[0]) {
    case "MOTOR_CONTROLLER":
        motorcontrol parts[1]
        // send to eventbus EVENT(raiseBridge) 
        // eventbus sends raiseBridge to motor control
        break;
    case "SIGNAL_THING":
        signalcontrol parts[1]
        break;
    default:
        break;
}