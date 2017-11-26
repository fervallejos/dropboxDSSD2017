var CLIENT_ID=n0st0nqytn97mx4;
	
	function getAccessTokenFromUrl(){
		return "6i1WBS8gA2AAAAAAAAAAEf09OwjbpzOG--GHfFKtvuXFXcBccJn2ynLcMsesIQun";
	}
	
	function isAuthenticated(){
		return getAccessTokenFromUrl();
	}
	
	function renderItems(items,dbx){
		var filesContainer=document.getElementId('files');
		$("#files").empty();
		items.forEach(function(item){
			var li=document.createElement('li');
				sl=dbx.sharingListSharedLinks({"path":"/"+item.name}).then(function(response){
					var a=document.createElement("a");
					a.setAttribute("href",response.url);
					a.appendChild(document.createTextNode(item.name));
					
					li.appendChild(a);
				});
				
			li.innerHTML=item.name+" - "+link;
			filesContainer.appendChild(li);
		});
		}
		
		function showPageSection(elementId){
		document.getElementId(elementId).style.display='block';
		}
		
		if(isAuthenticated()){
			showPageSection('authed-section');
			var dbx=new Dropbox({accessToken:"6i1WBS8gA2AAAAAAAAAAEf09OwjbpzOG--GHfFKtvuXFXcBccJn2ynLcMsesIQun"});
			dbx.filesListFolder({path: ''})
				then(function(response){
					renderItems(response.entries,dbx);
				})
				.catch(function(error){
					console.error(error);
				});
			}else{
				showPageSection('pre-auth-section');
				var dbx=new Dropbox({clientId: CLIENT_ID});
				var authUrl= dbx.getAuthenticationUrl('faltaalgo');
				document.getElementById('authlink').href=authUrl;
			}
			
			function uploadFile(){
				var ACCESSTOKEN= document.getElementById('access-token').value;
				var dbx=new Dropbox({accessToken: ACCESSTOKEN});
				var fileInput=document.getElementById('file-upload');
				var file= fileInput.files[0];
				dbx.filesUpload({path: '/' +file.name, contents: file})
					.then(function(response){
						var results= document.getElementById('results');
						results.appendChild(document.createTextNode('File uploaded!'));
						console.log(response);
						
						dbx.filesListFolder(path: ''})
						.then function(response){
							renderItems(response.entries,dbx);
						});
						.catch(function(error){
							console.error(error);
						});
						.catch(function(error){
							console.error(error);
						});
					return false;
					}
		
		
		
		
		