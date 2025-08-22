#include "BridgeStateMachine.h"
#include "BridgeSystemDefs.h"
#include "SocketServer.h"

// EXAMPLE SWITCH STATEMENT WITH PUBLISHING TO A COMMAND BUS
    // 1. We create a Command object
    // 2. We set its target and action using the enums
    // 3. We publish the command to the bus
    // 4. Finally, we change the state

case BridgeState::IDLE:
    if (event == BridgeEvent::BOAT_DETECTED) {

        Command cmd;

        cmd.target = CommandTarget::SIGNAL_CONTROL;
        cmd.action = CommandAction::STOP_TRAFFIC;

        m_commandBus.publish(cmd);

        changeState(BridgeState::STOPPING_TRAFFIC);
    }
    break;