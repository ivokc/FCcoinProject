import NetworkUtility from '../utility/NetworkUtility';
import DialogUtility from '../utility/DialogUtility';
import DataUtility from '../utility/DataUtility';
import StoreUtility from '../utility/StoreUtility';
import DesUtility from '../utility/DesUtility';
import NativeUtility from '../utility/NativeUtility';

//functional
export const FunctionalManager = {
  ...NetworkUtility,
  ...DataUtility,
  ...StoreUtility,
  ...DesUtility,
  ...NativeUtility
};


//ui
export const UIManager = {
  ...DialogUtility
};