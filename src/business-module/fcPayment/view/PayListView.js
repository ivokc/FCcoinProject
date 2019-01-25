/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,TouchableOpacity,
    View,Image,ScrollView
} from 'react-native';

import ListMenuView from '../components/ListMenuView';




const defaultProps = {

};

const defaultState = {

};

export default class PayListView extends PureComponent {

    constructor(props) {
        super(props);
    }




    renderList() {
        const {BTDatas,btStatus} = this.props;
        // console.log('2222222222222222',this.props)
          var ticketDataViews = [];
      for(var i = 0; i < BTDatas.length; i++){

          ticketDataViews.push(
            <ListMenuView tradeNum={BTDatas[i].tradeNum}
                          date={BTDatas[i].date}
                          fcNum={BTDatas[i].fcNum}
                          total={BTDatas[i].total}
                          statusShow={BTDatas[i].statusShow}
                          data={BTDatas[i].data}
                          key={i}
                          status={BTDatas[i].status}
                          statusStyle={  {color:BTDatas[i].statusStyle}}
                          handleChoosePress={this.props.handleChoosePress}/>);


      }

     return ticketDataViews;
    }

    render() {
      // console.log('2222222222222222',this.props)

        return (

           <View style={styles.container}>
      

              <View style={styles.body}>
                  <ScrollView style={styles.ScrollableLayout}>
                                  {this.renderList()}

                    </ScrollView>
                </View>



          </View>
        );
    }
}

PayListView.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },


  ScrollableLayout:{
    width:Constant.deviceWidth,
    // flex:12,
      // alignItems:'center',
  },
  body:{
    flex:8.2,
    marginTop:7,
    backgroundColor:'#F7F6F6',
  },

});
