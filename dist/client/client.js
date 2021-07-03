(function () {
  'use strict';

  const controlF6 = 167;
  setTick(() => {
    DisableControlAction(0, controlF6, true);
  });
  function EngineToggle() {
    RegisterCommand('engine', async () => {
      handleEngineToggle();
    }, false);

    if (IsControlJustReleased(0, controlF6) || IsDisabledControlJustReleased(0, controlF6)) {
      handleEngineToggle();
    }
  }

  function handleEngineToggle() {
    const vehicle = GetVehiclePedIsIn(PlayerPedId(), false);
    const isRunning = Number(GetIsVehicleEngineRunning(vehicle));

    if (vehicle) {
      SetVehicleEngineOn(vehicle, !isRunning, false, true);
      console.log(`Engine is now ${isRunning}`);
    } else {
      emit('chat:addMessage', 'You are not inside a vehicle.');
    }
  }

  EngineToggle();

}());
