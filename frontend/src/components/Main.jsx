import React, { useState } from 'react'
import axios from 'axios'
import '../index.css'

const Main = () => {
  const [followersInput, setFollowersInput] = useState('')
  const [followingInput, setFollowingInput] = useState('')
  const [comparisonResult, setComparisonResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleCompare = async (e) => {
    e.preventDefault()

    if (!followersInput.trim() || !followingInput.trim()) {
      setErrorMessage('Both followers and following inputs are required.')
      return
    }

    try {
      setLoading(true)
      const response = await axios.post('/compare', {
        followersInput: followersInput.trim(),
        followingInput: followingInput.trim(),
      })

      setComparisonResult(response.data)
      setErrorMessage(null)
    } catch (error) {
      console.error('Error in comparison:', error)
      setErrorMessage('Error comparing data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="container mx-auto px-4 pt-8 md:px-8 lg:px-36">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center">
          <div className="mb-16 mt-12 w-full px-4 lg:w-7/12 lg:px-8 xl:px-12">
            <div className="text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-center">
                Compare Instagram Followers and Following
              </h1>
              <p className="py-6 text-md md:text-lg font-medium">
                Copy your followers and following lists below to see who you
                follow that doesn't follow you back, and who follows you that
                you don't follow back.
              </p>
            </div>
            <div className="card w-full bg-slate-200/60 shadow-xl">
              <div className="card-body">
                <form onSubmit={handleCompare} className="space-y-4">
                  <div className="flex flex-wrap justify-between space-y-4 md:space-y-0">
                    {/* Followers input */}
                    <div className="form-control w-full lg:w-1/2 pr-0 md:pr-2">
                      <textarea
                        placeholder="Enter Followers List"
                        className="textarea textarea-bordered w-full"
                        value={followersInput}
                        onChange={(e) => setFollowersInput(e.target.value)}
                        rows="10"
                      ></textarea>
                    </div>

                    {/* Following input */}
                    <div className="form-control w-full lg:w-1/2 pl-0 md:pl-2">
                      <textarea
                        placeholder="Enter Following List"
                        className="textarea textarea-bordered w-full"
                        value={followingInput}
                        onChange={(e) => setFollowingInput(e.target.value)}
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  {/* Compare button */}
                  <div className="form-control">
                    <button
                      type="submit"
                      className="btn bg-sky-500 text-slate-200 text-lg w-full bg-gradient-to-r from-[#405DE6] via-[#5B51D8] via-30% via-[#833AB4] via-50% via-[#C13584] via-70% via-[#E1306C] via-85% to-[#FD1D1D]"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="loading loading-bars loading-lg "></span>
                      ) : (
                        'Compare'
                      )}
                    </button>
                  </div>

                  {/* Display error message */}
                  {errorMessage && (
                    <p className="text-red-500 text-center">{errorMessage}</p>
                  )}

                  {/* Display comparison result */}
                  <div className="form-control">
                    {comparisonResult && (
                      <div className="max-h-96 overflow-auto rounded-lg bg-gray-50 p-4 text-left">
                        <h3 className="text-lg font-bold">
                          People who aren't following you back ☹️:
                        </h3>
                        <pre className="text-xs antialiased font-light">
                          {JSON.stringify(
                            comparisonResult.notFollowedBy,
                            null,
                            2
                          )}
                        </pre>
                        <h3 className="text-lg font-bold">
                          People who you follow you but you don't follow back
                          😬:
                        </h3>
                        <pre className="text-xs antialiased font-light">
                          {JSON.stringify(
                            comparisonResult.notFollowingBack,
                            null,
                            2
                          )}
                        </pre>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
