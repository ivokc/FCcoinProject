import NetworkUtility from '../utility/NetworkUtility';
import MessageUtility from '../utility/MessageUtility';
import DataUtility from '../utility/DataUtility';
import StoreUtility from '../utility/StoreUtility';

//functional
export const FunctionalManager = {
  ...NetworkUtility,
  ...DataUtility,
  ...StoreUtility,
};


//ui
export const UIManager = {
  ...MessageUtility
};