import React, { useState, useEffect } from "react";
import _ from "lodash";
import StartLayout from './StartLayout';
import CollectingLayout from './CollectingLayout';
import FinishLayout from './FinishLayout';
import { getEventsStatusURL } from '../../services/server/server'

function DashboardLayout(props) {
    const { initialUserInfo } = props
    const [userInfo, setUserInfo] = useState(false)

    useEffect(() => {
        const url = getEventsStatusURL()
        const source = new EventSource(url);
    
        source.addEventListener('open', () => {
          console.log('SSE opened!');
        });
    
        source.addEventListener('message', (e) => {
          const data = JSON.parse(e.data);
          console.log(data)
          setUserInfo(data);
        });
    
        source.addEventListener('error', (e) => {
          console.error('Error: ',  e);
        });
    
        return () => {
          source.close();
        };
      }, []);

    function getLayout() {
        const userStatus = userInfo.status
        const email = userInfo.email
        if (userStatus === 'INITIAL_STATE') {
            return (
                <StartLayout userInfo={userInfo} />
            )
        }

        if (userStatus === 'COLLECTING_DATA') {
            return (
                <CollectingLayout userInfo={userInfo} email={email} />
            )
        }

        if (userStatus === 'AVAILABLE_RESULTS') {
            const events = userInfo.recommendedEvents
            const eventsParsed = events.map(function (event) {
                return {
                    title: _.get(event, 'info.displayName', ''),
                    artist: _.get(event, 'artistInfo.name', ''),
                    location: _.get(event, 'info.location.city', ''),
                    date: _.get(event, 'info.start.date', ''),
                    venue: _.get(event, 'info.venue.displayName', ''),
                    type: _.get(event, 'info.type', ''),
                    image: _.get(event, 'artistInfo.images[0].url', ''),
                    trackUrl: _.get(event, 'trackInfo.preview_url', '')
                }
            })
            return (
                <FinishLayout userInfo={userInfo} eventsParsed={eventsParsed} />
            )
        }
    }
    
    if (userInfo) {
        return (
            getLayout()
        )
    }
    else {
        return (
            <></> //TODO loading card
        )
    }

}

export default DashboardLayout