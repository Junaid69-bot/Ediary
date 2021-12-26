import React from 'react'
import { View, Text, SafeAreaView, Touchable, TouchableOpacity, ScrollView, Button,TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [lastDate, setLastDate] = React.useState(0)
  const [days, setDays] = React.useState([0, 1, 2])
  const [yearsList, setYearsList] = React.useState([2020, 2021, 2022, 2023, 2024, 2025])


  const [monts, setMonths] = React.useState(["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]);

  const d = new Date();
  const date = d.getDate();
  let month = d.getMonth();

  const year = d.getFullYear();
  const [selectedmonth, setSelectedmonth] = React.useState();
  const [selectedYear, setSselectedYear] = React.useState(year);

  let lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
  }
  React.useEffect(() => {
    setLastDate(lastday(selectedYear, month))
    let data = DateArrayFill();
    setDays(data)

  }, [])

  const DateArrayFill = () => {
    let data = []
    for (let i = 0; i != lastDate + 1; i++) {
      data.push(i)

    }

    return data
  }



  return (

    <SafeAreaView style={{ flex: 1,marginTop:20 }}>
      <View style={{ width: '100%', height: '20%',  flexDirection: "column" }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={{borderRadius:10,borderWidth:2,height:40,width:80,backgroundColor:'black'}}>
          <Text style={{color:"#fff",textAlign:'center',marginTop:5}}>BirthDays</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:10,borderWidth:2,height:40,width:80,backgroundColor:'black'}} >
          <Text  style={{color:"#fff",textAlign:'center',marginTop:5}}>BirthDays</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderRadius:10,borderWidth:2,height:40,width:80,backgroundColor:'black'}} >
          <Text  style={{color:"#fff",textAlign:'center',marginTop:5}}>BirthDays</Text>
        </TouchableOpacity>
        </View>
<View>
<TextInput  style={{ backgroundColor:'gray',width:'90%',alignSelf:'center',height:40,marginTop:10,borderRadius:20}}
placeholder="search"


/>
  </View>
      </View>


      <View style={{  borderColor: '#000000', flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 4,  borderColor: 'red' }}>
          <View style={{ height: 60,  flexDirection: 'row' }}>

            <View style={{ width: '49%' }}>
              <Picker
                mode="dropdown"
                dropdownIconColor="#fff"
                selectedValue={selectedmonth}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedmonth(itemValue)
                }>
                {
                  monts.map((data, i) => {
                    return (
                      <Picker.Item key={i} label={data} value={i} />
                    )
                  })
                }
              </Picker>
            </View>

            <View style={{ width: '49%', }}>
              <Picker
                mode="dropdown"
                dropdownIconColor="#fff"
                selectedValue={selectedYear}
                onValueChange={(itemValue, itemIndex) =>

                  setSselectedYear(itemValue)
                }>
                {
                  yearsList.map((data, i) => {
                    return (
                      <Picker.Item key={i} label={data.toString()} value={data} />
                    )
                  })
                }
              </Picker>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, borderColor: 'blue' }}>
         
          <ScrollView contentContainerStyle={{ flex: 1, borderWidth: 2 }}>
            {

              days.map((item, index) => {

                return (
                  <>

                    <TouchableOpacity key={index} style={{ flex: 1, height: 30, borderWidth: 0.3,backgroundColor:'black' }} onPress={() => console.log(item)}>

                      <Text style={{ textAlign: 'center', fontSize: 14, backgroundColor: date === index ? "gray" : "black" ,color:'white'}}> {item} </Text>

                    </TouchableOpacity>
                  </>
                )
              })


            }
          </ScrollView>
        </View>


      </View>
    </SafeAreaView>
  )
}
