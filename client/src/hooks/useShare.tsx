import axios from "axios";
import { useSetRecoilState } from "recoil";
import { FROTEND_URL, URL } from '../utils/contants'
import { shareLink } from "../store/atoms/shareLink";


export function useShare(){
    const setShareLink = useSetRecoilState(shareLink);
    const fetchShareLink = async( isSharingEnabled: boolean ) =>  {
        try{
          const response = await axios.post(
            `${URL}/share/brain`,
            {share: isSharingEnabled},
            {
              headers: {
                authorization: `${localStorage.getItem('authToken')}`
              }
            }
          )
          setShareLink(`${FROTEND_URL}/share/${response.data.link.hash}`);
        }catch(err){
          console.log(`Error fetching share link, ${err}`);
        }
      }
    return { fetchShareLink };
}