import {useEffect, useState} from "react";
import EntryCards from "./EntryCards";
import {Grid, Box}  from '@material-ui/core/';

export function CardHolder({context, content}){
    const [journals, setJournals] = useState(content);
    useEffect(()=>{
        setJournals(content);
    },[content])
    const updateJournal = (journal_id, newJournal) => {
        // check if the newJournal is in the valid format
        if (Object.keys(newJournal).length > 0) {
            let index = journals.findIndex((journal)=>{
                return journal._id===journal_id;
            });
            let newJournals = [...journals];
            newJournals[index] = newJournal;
            setJournals(newJournals);
        }
    }

    return (
        <>
            <Box m={5} mt={0}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}>
                {journals.map((journal) => (
                    <Grid key={journal._id} item xs={12} sm = {6} md={4} lg = {3}>
                        <EntryCards
                            content={journal}
                            updateJournal = {updateJournal}
                            context={context}
                        />
                    </Grid>
                ))}
              </Grid>
            </Box>
          </>
      );

}

export default CardHolder;