import { useState, useEffect } from 'react'
import './App.css';
import ReusableSwitch from './ReusableSwitch';
import data from './data';
import uniqueVal from './uniqeData';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';
const checkedArr = [];
function App() {

  const [arrDt, setArrDt] = useState([]);
  const [arrDts, setArrDts] = useState([]);
  const [datass, setDatass] = useState([])


  const cityYY = data.map((v, i) => {
    return v.city
  });
  const allCity = uniqueVal(cityYY)

  const categoryYY = data.map((v, i) => {
    return v.category
  });
  const allCategory = uniqueVal(categoryYY)

  const typeYY = data.map((v, i) => {
    return v.type
  });
  const allType = uniqueVal(typeYY)

  const activeYY = data.map((v, i) => {
    return v.active
  });
  const allActive = uniqueVal(activeYY)


  useEffect(() => {
    setArrDt(data)
    setArrDts(data)
  }, [])

  const getData = (e) => {
    if (e.target.checked) {

      let ch = e.target.value;
      //console.log(ch);
      /* setDatass([...datass, ch]) */

      checkedArr.push(ch)
      console.log("checked : ", checkedArr);

      //console.log(checkedArr.length);
      //console.log("Yes : ", ch);
      const ab = arrDt.filter((v) => {
        return v.city === checkedArr[checkedArr.length - 1];
      })
      setArrDt(ab);
    }
    else {
      let ch = e.target.value;
      var index = checkedArr.indexOf(ch);
      if (index !== -1) {
        checkedArr.splice(index, 1);
      }
      console.log("remove : ", checkedArr);
      /* let ch = e.target.value
      let index = datass.indexOf(ch);
      if (index !== -1) {
        datass.splice(index, 1);
      } */
      /* console.log("remove : ", datass); */
      //setArrDt(arrDts)
    }
  }
  //console.log(datass);
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-2">City
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allCity.map((v, i) => {
                  return (
                    //<ReusableSwitch name={v} />
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" value={v} onChange={getData} />}
                      label={v}
                      labelPlacement="end"
                    />
                  )
                })
              }
            </div>
          </div>

          <div className="col-2">Category
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allCategory.map((v, i) => {
                  return (
                    <ReusableSwitch name={v} />
                  )
                })
              }
            </div>
          </div>

          <div className="col-2">Type
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allType.map((v, i) => {
                  return (
                    <ReusableSwitch name={v} />
                  )
                })
              }
            </div>
          </div>

          <div className="col-2">Active
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allActive.map((v, i) => {
                  return (
                    <ReusableSwitch name={v} />
                  )
                })
              }
            </div>
          </div>

          <div className="col-4">
            <TextField id="standard-basic" label="Name" />
          </div>
        </div>

      </div>

      <div style={{ marginTop: '120px' }}>
        <div className="container" style={{ border: '1px solid black' }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">City</th>
                <th scope="col">Categories</th>
                <th scope="col">Type</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody>
              {
                arrDt ?
                  arrDt.map((val, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.city}</td>
                        <td>{val.category}</td>
                        <td>{val.type}</td>
                        <td>{val.active}</td>
                      </tr>
                    )
                  })
                  :
                  null
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
