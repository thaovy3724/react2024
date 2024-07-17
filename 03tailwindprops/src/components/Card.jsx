function Card({username = 'thaovy', post = 'not assign yet'}){
    // set a default value for username to thaovy
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/26890891/pexels-photo-26890891/free-photo-of-banh-pho-mai-new-york-v-i-qu-vi-t-qu-t.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
            <div className="pt-6 space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, vel.
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div>
                    {username}
                </div>
                <div>
                    {post}
                </div>
                </figcaption>
            </div>
            </figure>
        </div>
    )
}

export default Card