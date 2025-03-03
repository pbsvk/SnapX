import GridPostList from '@/components/shared/GridPostList';
import Loader from '@/components/shared/Loader';
import { useUserContext } from '@/context/AuthContext';
import { useSavedPosts } from '@/lib/react-query/queriesAndMutations';

const Saved = () => {
  const currentUser = useUserContext();
  const { data: savedPosts, isLoading: isPostsLoading } = useSavedPosts(currentUser.user.id);
  const posts = savedPosts?.map(post => post.post);
  //console.log(currentUser)
  //console.log(posts);

  return (
    <div className='explore-container'>
      <img 
  src="/assets/images/1168411.png" 
  alt="auth-bg" 
  className="fixed top-0 left-0 min-w-full min-h-full object-cover z-[-1]"/>
      <div className='flex-between w-full max-w-5xl mt-16 mb-7'>
        <h2 className='body-bold md:h3-bold'>Saved Posts</h2>

        <div className='flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer'>
          <p className='small-medium md:base-medium text-light-2'>All</p>
          <img 
            src="/assets/icons/filter.svg" 
            alt="filter"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className='flex flex-wrap gap-9 w-full max-w-5xl'>
        {
          isPostsLoading? (
            <div className='flex-center w-full h-full'>
              <Loader />
            </div>
          ) : (
            posts && <GridPostList posts={posts} />
          )
        }
      </div>

    </div>
  )
}

export default Saved;