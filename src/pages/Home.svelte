<script>
	import {
		Canvas,
		Scene,
		PerspectiveCamera,
		DirectionalLight,
		AmbientLight,
		SphereBufferGeometry,
		Mesh,
		WebGLRenderer,
		MeshPhongMaterial,
		TextureLoader,
		Color,
	} from "svelthree";

	const textureLoader = new TextureLoader();
	const geometry = new SphereBufferGeometry(1, 32, 32);
	const material = new MeshPhongMaterial({
		map: textureLoader.load("/material/terra.jpg"),
		bumpMap: textureLoader.load("/material/terra-bump.jpg"),
		specularMap: textureLoader.load("/material/terra-spec.jpg"),
		specular: new Color("grey"),
	});

	function rotateEarth(obj) {
		let doRotate = false;
		let animationFrame = 0;

		function onStart() {
			doRotate = true;
			animationFrame = requestAnimationFrame(rotate);
		}

		function onDestroy() {
			doRotate = false;
			cancelAnimationFrame(animationFrame);
		}

		function rotate() {
			if (!doRotate) return;
			obj.rotation.x += 0.008;
			obj.rotation.y += 0.006;
			obj.rotation.z += 0.005;
			animationFrame = requestAnimationFrame(rotate);
		}

		return {
			onStart: onStart,
			onDestroy: onDestroy,
		};
	}
</script>

<main class="flex flex-col justify-between items-center px-10 bg-primary-main">
	<section class="flex flex-col lg:flex-row w-full xl:max-w-[90%] justify-between items-center h-full p-10 gap-10">
		<div>
			<h1 class="font-semibold text-5xl leading-normal mb-2">
				Nossa energia não pode <br /> ir para o <span class="text-primary-darker">lixo.</span>
			</h1>
			<h2 class="text-xl leading-normal">
				Valorizamos a transparência, acesse os dados de consumo <br /> energético da Instituição Federal de Alagoas.
			</h2>
		</div>
		<div>
			<Canvas let:sti w={350} h={350} interactive class="outline-none cursor-default">
				<Scene {sti} let:scene id="scene1" props={{ background: 0x9fe3ba }}>
					<PerspectiveCamera {scene} id="cam1" pos={[0, 0, 3]} lookAt={[0, 0, 0]} />
					<AmbientLight {scene} intensity={1.1} />
					<DirectionalLight {scene} pos={[-2, 2, 2]} intensity={0.2} />

					<Mesh
						{scene}
						{geometry}
						{material}
						mat={{ roughness: 0.5, metalness: 0.5 }}
						pos={[0, 0, 0]}
						rot={[0, 0, 0]}
						on:pointermove={event => {
							let obj = event.detail.target;
							obj.rotation.x += 0.005;
							obj.rotation.y += 0.005;
						}}
						interact
						animation={rotateEarth}
						aniauto />
				</Scene>

				<WebGLRenderer {sti} sceneId="scene1" camId="cam1" config={{ antialias: true, alpha: true }} />
			</Canvas>
		</div>
	</section>
	<section
		class="flex flex-col lg:flex-row justify-between items-center gap-10 w-full lg:h-52 p-14 bg-white shadow-md rounded-tl-[30px] rounded-tr-[30px]">
		<h2 class="font-semibold text-3xl leading-normal">
			Esta ferramenta torna público os dados de <br /> consumo de energia do IFAL, consulte agora:
		</h2>
		<div class="flex flex-col gap-2">
			<a href="/dados" class="rounded-sm px-6 py-1 bg-primary-dark text-white text-xl text-center">
				Veja os dados
			</a>
			<a href="/contato" class="rounded-sm px-6 py-1 bg-gray-500 text-white text-xl text-center">
				Fale conosco
			</a>
		</div>
	</section>
</main>
