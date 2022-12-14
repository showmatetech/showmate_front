import React, { useState, useEffect } from "react";
import _ from "lodash";
import StartLayout from './StartLayout';
import ArtistSelectionLayout from './ArtistSelectionLayout';
import CollectingLayout from './CollectingLayout';
import FinishLayout from './FinishLayout';
import EventsSelectionLayout from './EventsSelectionLayout';
import { getEventsStatusURL } from '../../services/server/server'

function DashboardLayout(props) {
    const { token } = props
    const [userInfo, setUserInfo] = useState(false)


    useEffect(() => {
        const url = getEventsStatusURL(token)
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
      }, [token]);

    function getLayout() {
        const userStatus = userInfo.status
        const hasLocation = (userInfo.location && userInfo.location.lat && userInfo.location.long)
        const email = userInfo.email
        if (userStatus === 'INITIAL_STATE' || !hasLocation) {

            return (
                <StartLayout userInfo={userInfo}/>
            )
        }

        if (userStatus === 'WAITING_SELECTION' && hasLocation) {
            return (
                <ArtistSelectionLayout userInfo={userInfo} />
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

        if (userStatus === 'RESULTS_RANKED') {
            const {likedItems, discardedItems} = userInfo.eventsSelection
            console.log(likedItems)
            console.log(discardedItems)
            return (
                <EventsSelectionLayout userInfo={userInfo} likedItems={likedItems}  discardedItems={discardedItems} />
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