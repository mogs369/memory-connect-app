import React, { useState } from 'react';

const MemoryConnectApp = () => {
  const [selectedTab, setSelectedTab] = useState('profile');
  const [storyGenerated, setStoryGenerated] = useState(false);
  
  // Placeholder components that would normally be imported from UI library
  const Button = ({ children, variant, size, className, onClick }) => (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 rounded ${
        variant === 'outline' 
          ? 'border border-gray-300 hover:bg-gray-50' 
          : 'bg-blue-700 text-white hover:bg-blue-800'
      } ${size === 'sm' ? 'text-sm px-2 py-1' : 'px-4 py-2'} ${className}`}
    >
      {children}
    </button>
  );
  
  const Input = (props) => (
    <input 
      {...props} 
      className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" 
    />
  );
  
  const Textarea = (props) => (
    <textarea 
      {...props} 
      className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" 
    />
  );
  
  const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block font-medium text-gray-700 mb-1">
      {children}
    </label>
  );
  
  const Card = ({ children }) => (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {children}
    </div>
  );
  
  const CardHeader = ({ children }) => (
    <div className="px-4 py-5 border-b border-gray-200">
      {children}
    </div>
  );
  
  const CardContent = ({ children }) => (
    <div className="px-4 py-5">
      {children}
    </div>
  );
  
  const CardTitle = ({ children }) => (
    <h3 className="text-lg font-medium text-gray-900">
      {children}
    </h3>
  );
  
  const CardDescription = ({ children }) => (
    <p className="mt-1 text-sm text-gray-500">
      {children}
    </p>
  );
  
  const TabsList = ({ children }) => (
    <div className="flex border-b border-gray-200 mb-4">
      {children}
    </div>
  );
  
  const TabsTrigger = ({ value, children, className }) => (
    <button 
      className={`px-4 py-2 border-b-2 font-medium text-sm ${
        selectedTab === value 
          ? 'border-blue-500 text-blue-600' 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      } ${className}`}
      onClick={() => setSelectedTab(value)}
    >
      {children}
    </button>
  );
  
  const TabsContent = ({ value, children }) => (
    selectedTab === value ? <div>{children}</div> : null
  );
  
  // Icons (simple SVG representations)
  const Icon = ({ name }) => {
    const icons = {
      settings: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      ),
      user: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ),
      penTool: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      ),
      play: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      ),
      lineChart: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
      ),
      bookOpen: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      ),
      save: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
      ),
      rotateCcw: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v6h6"></path><path d="M3 13a9 9 0 1 0 3-7.7L3 8"></path></svg>
      ),
      plus: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      )
    };
    
    return <span className="inline-block w-5 h-5">{icons[name]}</span>;
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-800">MemoryConnect</h1>
          <p className="text-gray-600">Personalized Story Generator for Cognitive Wellness</p>
        </div>
        <Button variant="outline" size="icon">
          <Icon name="settings" />
        </Button>
      </div>
      
      <div className="w-full">
        <TabsList>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <Icon name="user" /> Profile
          </TabsTrigger>
          <TabsTrigger value="create" className="flex items-center gap-2">
            <Icon name="penTool" /> Create
          </TabsTrigger>
          <TabsTrigger value="deliver" className="flex items-center gap-2">
            <Icon name="play" /> Deliver
          </TabsTrigger>
          <TabsTrigger value="assess" className="flex items-center gap-2">
            <Icon name="lineChart" /> Assess
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="user" /> Client Profile
              </CardTitle>
              <CardDescription>
                Enter client details while respecting privacy guidelines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clientName">Preferred Name (first name only)</Label>
                  <Input id="clientName" placeholder="e.g., Thomas" />
                </div>
                <div>
                  <Label htmlFor="region">Region They Grew Up</Label>
                  <Input id="region" placeholder="e.g., coastal town in Ireland" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="occupation">Former Occupation</Label>
                  <Input id="occupation" placeholder="e.g., woodworker" />
                </div>
                <div>
                  <Label htmlFor="timeperiod">Meaningful Time Period</Label>
                  <Input id="timeperiod" placeholder="e.g., 1960s" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="activities">Favorite Activities/Hobbies</Label>
                <Input id="activities" placeholder="e.g., fishing, card games, nature walks" />
              </div>
              
              <div>
                <Label htmlFor="relationships">Important Relationships (first names only)</Label>
                <Input id="relationships" placeholder="e.g., wife M, daughter F, son P" />
              </div>
              
              <div>
                <Label htmlFor="smells">Favorite Smells</Label>
                <Input id="smells" placeholder="e.g., wood, rain, fresh bread" />
              </div>
              
              <div>
                <Label htmlFor="music">Favorite Music</Label>
                <Input id="music" placeholder="e.g., traditional folk songs" />
              </div>
              
              <div>
                <Label htmlFor="skills">Skills They Were Proud Of</Label>
                <Input id="skills" placeholder="e.g., precise measurements and crafting" />
              </div>
              
              <div>
                <Label htmlFor="specialPlace">Special Place Type</Label>
                <Input id="specialPlace" placeholder="e.g., a lakeside cottage" />
              </div>
              
              <div>
                <Label htmlFor="additionalNotes">Additional Considerations</Label>
                <Textarea id="additionalNotes" placeholder="e.g., Morning is their most alert time, slight hearing limitations..." />
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">
                  <Icon name="rotateCcw" /> Reset
                </Button>
                <Button>
                  <Icon name="save" /> Save Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="penTool" /> Story Generator
              </CardTitle>
              <CardDescription>
                Create a personalized story using the client profile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2">Selected Profile: <span className="font-medium">Thomas</span></p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <p>Region: coastal town in Ireland</p>
                  <p>Occupation: woodworker</p>
                  <p>Activities: fishing, card games, walks</p>
                  <p>Time period: 1960s</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Story Type</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="standard" name="storyType" className="h-4 w-4" defaultChecked />
                      <Label htmlFor="standard">Standard Cognitive Wellness Story</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="seasonal" name="storyType" className="h-4 w-4" />
                      <Label htmlFor="seasonal">Seasonal Theme (Current: Spring)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="birthday" name="storyType" className="h-4 w-4" />
                      <Label htmlFor="birthday">Birthday Celebration</Label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label>Cognitive Focus</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="balanced" name="cognitiveFocus" className="h-4 w-4" defaultChecked />
                      <Label htmlFor="balanced">Balanced (All Elements)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="sensory" name="cognitiveFocus" className="h-4 w-4" />
                      <Label htmlFor="sensory">Enhanced Sensory Focus</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="calming" name="cognitiveFocus" className="h-4 w-4" />
                      <Label htmlFor="calming">Calming/Meditation Focus</Label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full" onClick={() => setStoryGenerated(true)}>
                    Generate Story
                  </Button>
                </div>
                
                {storyGenerated && (
                  <div className="border rounded-lg p-4 mt-4">
                    <h3 className="font-medium mb-2">Thomas the Craftsman</h3>
                    <p className="text-sm text-gray-600 italic mb-4">Take a moment to feel yourself sitting comfortably, just as you are. Notice how your breath flows in and out, like gentle waves. Everything in this moment is just as it should be. Let's listen to a story together.</p>
                    <p className="text-sm mb-2">Morning light streamed through the workshop window as Thomas ran his hands over smooth oak wood. One, two, three gentle strokes, feeling the grain beneath his fingertips...</p>
                    <Button variant="outline" className="mt-2 w-full">
                      <Icon name="bookOpen" /> View Full Story
                    </Button>
                    <div className="flex justify-between mt-4">
                      <Button variant="outline" size="sm">
                        <Icon name="rotateCcw" /> Regenerate
                      </Button>
                      <Button size="sm">
                        <Icon name="save" /> Save Story
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="deliver">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="play" /> Story Delivery
              </CardTitle>
              <CardDescription>
                Interactive guidance for delivering the story effectively
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h3 className="text-blue-800 font-medium mb-2">Preparation Checklist</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="quietSpace" className="mr-2" />
                    <label htmlFor="quietSpace">Find a quiet space with minimal distractions</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="objectsReady" className="mr-2" />
                    <label htmlFor="objectsReady">Prepare 1-2 sensory objects related to the story</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="musicReady" className="mr-2" />
                    <label htmlFor="musicReady">Have appropriate background music available</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="comfortableSeating" className="mr-2" />
                    <label htmlFor="comfortableSeating">Ensure comfortable seating arrangement</label>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden mb-4">
                <div className="bg-gray-100 p-3 flex justify-between items-center">
                  <h3 className="font-medium">Thomas the Craftsman</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Current Story</span>
                </div>
                <div className="p-4">
                  <div className="border-l-4 border-blue-500 pl-3 mb-4 bg-blue-50 p-2">
                    <p className="text-sm italic">Reading tip: Speak slowly and clearly. Use a gentle, warm tone.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-yellow-800">Grounding Introduction</h4>
                      <p className="text-sm mt-1">Take a moment to feel yourself sitting comfortably, just as you are. Notice how your breath flows in and out, like gentle waves. Everything in this moment is just as it should be. Let's listen to a story together.</p>
                      <div className="mt-2 text-xs text-yellow-700">
                        <span className="block">💡 Model slow breathing here</span>
                        <span className="block">💡 Make eye contact and speak gently</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm">Morning light streamed through the workshop window as Thomas ran his hands over smooth oak wood. <span className="bg-blue-100">One, two, three</span> gentle strokes, feeling the grain beneath his fingertips. The sweet smell of wood shavings filled the air as he worked...</p>
                      <div className="mt-1 text-xs text-blue-700">
                        <span className="block">💡 Use fingers to demonstrate counting</span>
                        <span className="block">💡 Consider introducing wood scent here</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full text-sm">
                      Show full story with delivery notes
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-medium mb-2">Real-time Response Guidance</h3>
                <div className="space-y-3 text-sm">
                  <p>• If client shows signs of agitation: pause and move to the calming conclusion</p>
                  <p>• If client mentions related memories: affirm and incorporate if possible</p>
                  <p>• If client seems disengaged: introduce a sensory element or gentle touch</p>
                  <p>• If client corrects details: accept their version and continue</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="assess">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="lineChart" /> Assessment Tracker
              </CardTitle>
              <CardDescription>
                Track engagement and effectiveness over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-medium">Thomas - Session Assessment</h3>
                  <p className="text-sm text-gray-600">Current Date: March 11, 2025</p>
                </div>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Icon name="plus" /> New Assessment
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="storyTitle">Story Title</Label>
                    <Input id="storyTitle" defaultValue="Thomas the Craftsman" />
                  </div>
                  <div>
                    <Label htmlFor="sessionTime">Time of Session</Label>
                    <Input id="sessionTime" type="time" defaultValue="10:30" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input id="duration" type="number" defaultValue="15" />
                  </div>
                  <div>
                    <Label htmlFor="objects">Physical Objects Used</Label>
                    <Input id="objects" placeholder="e.g., wood sample, photo" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Attention & Focus (Rate 1-5)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="eyeContact" className="text-xs">Maintained eye contact</Label>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button 
                            key={num} 
                            className={`w-8 h-8 border ${num === 4 ? 'bg-blue-100 border-blue-500' : 'border-gray-300'} rounded-full mx-1 text-xs`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="narrative" className="text-xs">Tracked with narrative</Label>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button 
                            key={num} 
                            className={`w-8 h-8 border ${num === 3 ? 'bg-blue-100 border-blue-500' : 'border-gray-300'} rounded-full mx-1 text-xs`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Emotional Response (Rate 1-5)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="facialExpression" className="text-xs">Positive facial expressions</Label>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button 
                            key={num} 
                            className={`w-8 h-8 border ${num === 4 ? 'bg-blue-100 border-blue-500' : 'border-gray-300'} rounded-full mx-1 text-xs`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="calmness" className="text-xs">Exhibited calm during meditation</Label>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button 
                            key={num} 
                            className={`w-8 h-8 border ${num === 5 ? 'bg-blue-100 border-blue-500' : 'border-gray-300'} rounded-full mx-1 text-xs`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="notableObservations">Notable Observations</Label>
                  <Textarea 
                    id="notableObservations" 
                    placeholder="Describe specific moments of connection or responses..." 
                    className="h-20"
                    defaultValue="Smiled and nodded during the description of wood crafting. Appeared to mouth the words to counting sequence. Reached toward the wood sample."
                  />
                </div>
                
                <div>
                  <Label htmlFor="nextModifications">Elements to Modify Next Time</Label>
                  <Textarea 
                    id="nextModifications" 
                    placeholder="What would you change for the next session?" 
                    className="h-20"
                    defaultValue="Add more detail about fishing activities. Consider using actual sound of water/waves. Extend the meditation portion as client responded well."
                  />
                </div>
                
                <div>
                  <Label htmlFor="overallRating">Overall Effectiveness (1-10)</Label>
                  <div className="flex mt-1 justify-between">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <button 
                        key={num} 
                        className={`w-8 h-8 border ${num === 7 ? 'bg-blue-700 text-white' : 'border-gray-300'} rounded mx-0.5 text-xs`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="outline">Clear</Button>
                  <Button>Save Assessment</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </div>
  );
};

export default MemoryConnectApp;
