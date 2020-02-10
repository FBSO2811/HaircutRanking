import React from 'react';
import axios from "axios";
import Loader from "./Loader";
import VotingComponent from "./VotingComponent";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import Grid from "@material-ui/core/Grid";
import _ from 'underscore'

export default function VotingContainer() {

    const [loading, setLoading] = React.useState(false)
    const [haircuts, setHaircuts] = React.useState([])
    const [haircutsLeft, setHaircutsLeft] = React.useState([])
    const [haircutsRight, setHaircutsRight] = React.useState([])

    React.useEffect(() => {
        async function load() {
            setLoading(true);
            axios.get("https://raw.githubusercontent.com/LeCiseau/Front-end-JSON/master/haircut.json", {
            })
                .then(function (response){
                    const data = response.data
                    data.map( haircut => haircut["votes"] = 0)
                    setHaircuts(data)
                    const shuffledData = shuffleArray(data)
                    let halfwayThrough = Math.floor(shuffledData.length / 2)
                    setHaircutsLeft(shuffledData.slice(0, halfwayThrough))
                    setHaircutsRight(shuffledData.slice(halfwayThrough, shuffledData.length))
                    window.localStorage.setItem('allHaircuts', JSON.stringify({
                        data: data,
                    }));
                    setLoading(false);
                })
        }
        load()
    },[])


    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }


    return (
        <div style={{marginTop: "3%", marginLeft: "10%", marginRight:"10%", height: "100%"}}>
            { loading === false ?
                <VotingComponent haircutsLeft={haircutsLeft} haircutsRight={haircutsRight} haircuts={haircuts}/>
                :
                <Loader loading={loading}/>
            }
        </div>

    )

}
