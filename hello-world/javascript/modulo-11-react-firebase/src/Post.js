import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { db } from '../src/firebase.js';

function Post(props) {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        db.collection('posts').doc(props.id).collection('comments').orderBy('timestamp', 'desc').onSnapshot((snapchot) => {
            setComments(snapchot.docs.map((document) => {
                return { id: document.id, info: document.data() }
            }))
        })

    }, [])

    function comment(id, e) {
        e.preventDefault();

        let currentComment = document.querySelector('#comment-' + id).value;

        db.collection('posts').doc(id).collection('comments').add({
            name: props.user,
            comment: currentComment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        alert('Comentário feito com sucesso!');

        document.querySelector('#comment-' + id).value = "";

    }

    return (

        <div id="postSingle" className="postSingle">
            <img src={props.info.image} />
            <p><b>{props.info.username}</b>:{props.info.title}</p>
            <div className="comments">
                <h4>Últimos comentários:</h4>
                {
                    comments.map((val) => {
                        return (
                            <div className="commment-single">
                                <p><b>{val.info.name}</b>: {val.info.comment}</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                (props.user) ?
                    <form onSubmit={(e) => comment(props.id, e)}>
                        <textarea id={"comment-" + props.id}></textarea>
                        <input type="submit" value="Comentar!" />
                    </form>
                :<div></div>
            }
        </div>

    )

}

export default Post;