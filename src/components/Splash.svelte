<script>
    import successkid from 'images/successkid.jpg'; 
    import skaaLogo from 'images/logo-semi-opacity.png';
    import skaaSplash from 'images/ingame-cut.png';
	// Ex 2.15.4p1
	export let latestVersion = "";
	export let gameBrief = "";
</script>

<style>
	.splash {
		width: 100%;
		height: 50%;
		margin: auto;
		text-align: center;
		text-transform: uppercase;
	}

	.splash-head {
		font-size: 20px;
		font-weight: bold;
		color: white;
		
		padding: 0 1.6em;
		font-weight: 100;
		border-radius: 5px;
		line-height: 1em;
	}

	.brief-desc {
		width: 100%;
		color: #FFF;
		background-color: rgba(0,0,0,.4);
		margin: auto;
		padding: 1em 0;
		border-radius: 1px;
	}
	.brief-desc > p{
		margin: 0;
		opacity: .8;
	}	
	.main-img{
		width: 100%;
		max-width: 100%;
		height: auto;
	}

	.button {
		background-color: antiquewhite;
		color: #000;
		opacity: 1;
		padding: 0.5em 2em;
		border-radius: 5px;
		display: inline-block;
		min-width: 18.7em;
	}

	.button > small {
		font-size: .6em;
		display: block;
		padding: 0;
		margin: auto;

	}

	.splash-container {
		position: relative;
		opacity: 1;
		background-attachment: fixed;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		background-color: #333;
		min-height: 100%;
	}

	@media (max-height: 400px) {
		.splash-head {
			font-size: 300%;
		}
	}

	/* TABLET OR SMALL DESKTOP */
	@media (min-width: 768px) {
		.splash-head {
			font-size: 250%;
		}
		.main-img{
			width: 80%;
		}
		.brief-desc{
			width: 80%
		}

		.splash-container {
			background-size: auto;
		}
	}

	/* -- DESKTOP  -- */
	@media (min-width: 1366px) {
		.brief-desc{
			width: 50%
		}
		.splash-head {
			font-size: 300%;
		}
		.main-img{
			width: auto;
			min-width: 70%;
		}
	}

</style>
<div class="splash-container" style="background-image: url('{skaaSplash}')">
	<div class="splash">
		<h1 class="splash-head"> 
			<img class="main-img" alt="Seven Kingdoms Acient Adversaries Logo" src={skaaLogo} />
		</h1>
		<h2 class="brief-desc">
			<p>{gameBrief}The great RTS brief description</p>
		</h2>
		<p>
			<a href="download/latest" class="button button-primary">Play Now
				<small>{latestVersion !== "" ? `version ${latestVersion}` : ""}</small>
			</a>
		</p>
	</div> 
</div>