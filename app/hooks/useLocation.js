import * as Location from 'expo-location';
import { useEffect, useState }from 'react';

export default useLocation = () => {
    const [location, setLocation] = useState();

    try {
        const getLocation = async () => {
            const { granted } = await Location.requestPermissionsAsync();
            if(!granted) return;
            const { coords: { latitude, longitude }, } = await Location.getLastKnownPositionAsync();
            setLocation({ latitude, longitude });
        }
    
        useEffect(() => {
            getLocation();
        }, []);  
    } catch (error) {
        console.log(error);
    }

    return location;
};