import JournalEditingModal from './JournalEditingModal';
import JournalViewingModal from './JournalViewingModal';

function JournalModal(props) {

    return (
        <>
            {props.editing && (
                <JournalEditingModal
                    journal={props.journal}
                    handleClose={props.handleClose}
                    handleEdit={props.onEdit}
                    authorMode={props.authorMode}
                    refreshJournals={props.refreshJournals}
                />
            )}
            {!props.editing && (
                <JournalViewingModal
                    journal={props.journal}
                    handleEdit={props.onEdit}
                    handleClose={props.handleClose}
                    authorMode={props.authorMode}
                    refreshJournals={props.refreshJournals}
                    like={props.like}
                    onLike={props.onLike}
                />
            )}
        </>
    );
}
export default JournalModal;
