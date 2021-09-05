# August 2021 

I created a 3D printed enclosure to block ambient light and hold the [AS7265x Spectral Triad](https://www.sparkfun.com/products/15050). 

<img width="500" alt="image" src="https://user-images.githubusercontent.com/10489972/132111227-0265ef75-c1a5-4978-a153-5cd524091712.png">
<img width="500" alt="image" src="https://user-images.githubusercontent.com/10489972/132111239-97fa0389-8421-47ce-a2ca-d7de65da5098.png">

The data can be found [here](https://docs.google.com/spreadsheets/d/18tIvDpiz1NvjK_i_9pyhub3FySeUjG97rWv8cSUtHuc/edit?usp=sharing). 

First, I compared the spectra measured for clear tap water with water containing green food coloring. The Spectral Triad takes measurements continuously, so I just averaged 5 consecutive measurements for each variant. 

<img width="500" alt="image" src="https://user-images.githubusercontent.com/10489972/132110630-2a6c5a75-afbe-4c98-a12b-bc3f0cdf3579.png">

I don't want to read too much into the results. It's not clear why some wavelengths reflect more than others for clear water. The results seem almost like an amplification of that initial measurement. The color green is associated with wavelengths ~520-570nm, or bands E (510 nm), F (535 nm), and G (560 nm). Those are all amplified in the presence of green food coloring, but so are the lower/bluer bands. It's also not clear why something like band R (610 nm, orange) is activated by the green food coloring. 

Next I wanted to test something that wasn't visible to the naked eye, so I tried incrementally lowering the pH of tap water. The results don't seem to give meaningful information. 

<img width="500" alt="image" src="https://user-images.githubusercontent.com/10489972/132110935-caf0cd77-8933-48bd-9244-81829124613d.png">

I'm concerned that my setup is insufficient for getting repeatable results. The rounded vials are probably not ideal, as they might give irregular reflections and refraction. They can also rotate slightly in the 3D printed housing, which also compromises results. It would be better to use square cuvettes instead, so I'll incorporate that into the next iteration. 

Changes for the next iteration:
- Square cuvette instead of rounded vial
- How far should the board be from the cuvette? (SparkFun said 1 inch.) 
- Use external bulbs? This seems like a hassle, is there any evidence that it would help? 
- Should we stick with the Triad? There are many open-source designs already on [Public Lab](https://publiclab.org/wiki/spectrometry), but these are designed for a different method using a diffraction grating. The PublicLabs method claims to be accurate to 1nm in the range of 400-900nm, essentially the visiable spectrum. The Triad, on the other hand, is $70 and covers 18 bands ranging from 410-940nm. Another option is the C12880MA that was reviewed [here](https://impfs.github.io/review/), ~$400 and covering a range of 340-850nm. It would be really useful to be able to measure in the UV range (200-300) but I'm not aware of an affordable method to do so. 

