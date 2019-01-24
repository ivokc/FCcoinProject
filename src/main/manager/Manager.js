import NetworkUtility from '../utility/NetworkUtility';
import MessageUtility from '../utility/MessageUtility';
import DataUtility from '../utility/DataUtility';
import StoreUtility from '../utility/StoreUtility';
import DesUtility from '../utility/DesUtility';

//functional
export const FunctionalManager = {
  ...NetworkUtility,
  ...DataUtility,
  ...StoreUtility,
  ...DesUtility
};


//ui
export const UIManager = {
  ...MessageUtility
};