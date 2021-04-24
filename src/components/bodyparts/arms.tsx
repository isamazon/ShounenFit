import React from 'react'
import arms from '../../assets/bodyparts/armsSVG.svg'

function Arms(props: React.SVGProps<SVGSVGElement>) {
    return (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" {...props}
 width="" height="" viewBox="0 0 900.000000 900.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
fill={props.color} stroke="none">
<path d="M2965 7803 c-134 -21 -259 -60 -296 -90 -8 -7 -19 -13 -23 -13 -17 0
-74 -52 -141 -130 -40 -47 -83 -97 -96 -111 -13 -14 -49 -57 -79 -94 -30 -37
-62 -75 -71 -84 -8 -9 -30 -36 -49 -61 -19 -25 -45 -56 -57 -70 -12 -14 -42
-50 -65 -81 -124 -163 -242 -315 -252 -324 -6 -5 -28 -32 -48 -60 -21 -27 -42
-56 -48 -62 -6 -7 -25 -34 -42 -60 -18 -27 -65 -92 -105 -145 -40 -53 -73
-100 -73 -103 0 -3 -27 -42 -60 -85 -33 -43 -60 -82 -60 -85 0 -4 -20 -33 -45
-65 -25 -32 -45 -61 -45 -63 0 -3 -34 -55 -75 -117 -41 -62 -75 -114 -75 -117
0 -3 -13 -22 -30 -43 -16 -21 -30 -41 -30 -44 0 -4 -12 -25 -27 -49 -36 -56
-50 -78 -63 -102 -6 -11 -19 -33 -30 -50 -11 -16 -23 -37 -27 -45 -4 -8 -19
-33 -35 -54 -15 -21 -28 -43 -28 -47 0 -4 -12 -27 -27 -51 -45 -69 -51 -80
-78 -133 -15 -27 -35 -63 -45 -80 -25 -40 -55 -97 -173 -330 -60 -118 -141
-291 -172 -370 -15 -37 -71 -160 -91 -198 -8 -16 -14 -38 -14 -50 0 -12 -7
-31 -15 -41 -8 -11 -15 -28 -15 -38 0 -9 -7 -34 -16 -55 -41 -96 -60 -147 -74
-198 -5 -16 -14 -46 -20 -65 -7 -19 -16 -48 -22 -65 -6 -16 -13 -48 -17 -70
-4 -22 -13 -50 -19 -62 -7 -12 -12 -35 -12 -52 0 -16 -5 -42 -11 -58 -25 -62
-57 -254 -65 -391 -7 -107 4 -130 99 -216 75 -67 273 -228 317 -259 14 -9 53
-38 87 -64 34 -27 71 -55 83 -63 12 -8 50 -36 84 -61 33 -25 66 -48 71 -50 6
-2 48 -29 95 -60 137 -90 200 -130 235 -149 11 -6 43 -24 70 -41 28 -16 64
-37 80 -45 17 -8 44 -23 60 -34 17 -10 93 -51 170 -90 77 -39 147 -75 155 -79
8 -5 35 -18 60 -29 25 -11 72 -32 105 -47 33 -15 76 -34 95 -43 47 -21 86 -37
140 -57 25 -9 58 -23 73 -31 16 -8 35 -14 44 -14 8 0 27 -6 41 -14 52 -26 103
-46 120 -46 10 0 26 -6 37 -14 11 -7 34 -16 50 -18 17 -3 46 -11 65 -18 149
-54 203 -70 230 -70 14 -1 36 -7 50 -15 14 -8 36 -14 50 -15 14 0 45 -6 70
-14 102 -33 159 -46 192 -46 20 0 52 -7 71 -15 20 -8 55 -15 78 -15 23 0 62
-7 88 -14 45 -15 163 -31 327 -45 44 -4 86 -11 93 -15 7 -5 105 -12 219 -16
114 -5 245 -13 292 -19 220 -27 1307 -50 1467 -32 51 6 174 14 275 17 102 3
209 12 241 20 32 8 98 14 145 15 48 0 110 5 137 10 28 5 77 13 110 18 175 26
214 33 261 47 28 8 64 14 80 14 16 0 49 6 74 14 56 18 133 37 185 45 22 4 50
13 62 19 12 7 29 12 38 12 9 0 31 6 48 14 18 8 43 16 57 19 39 8 146 48 193
72 16 8 35 15 43 15 7 0 30 9 51 19 21 11 67 33 103 50 83 39 210 109 231 127
8 8 20 14 26 14 5 0 21 9 34 21 13 12 47 36 75 54 97 63 284 235 357 330 26
33 60 76 76 95 17 19 31 38 31 42 0 4 17 33 38 65 41 61 52 81 90 160 13 26
28 55 33 63 5 8 12 22 15 30 3 8 13 33 21 55 9 22 21 54 28 70 22 52 45 129
45 151 0 11 5 25 10 30 6 6 14 33 19 60 5 27 13 69 19 94 23 95 34 168 42 261
7 99 14 124 31 114 5 -4 9 79 9 209 0 177 -2 216 -14 216 -15 0 -26 30 -26 76
0 35 -34 174 -50 203 -5 11 -10 29 -10 41 0 12 -6 34 -13 48 -8 15 -21 43 -29
62 -42 96 -87 181 -125 238 -24 35 -43 66 -43 69 0 15 -160 200 -234 269 -172
162 -351 278 -571 369 -124 51 -280 93 -389 106 -43 5 -95 13 -115 19 -46 13
-319 13 -357 0 -16 -5 -65 -14 -109 -19 -44 -5 -100 -15 -125 -21 -105 -27
-157 -43 -182 -56 -14 -8 -33 -14 -41 -14 -9 0 -28 -6 -44 -14 -15 -8 -62 -31
-103 -51 -41 -20 -88 -45 -105 -56 -16 -10 -37 -22 -45 -26 -8 -3 -31 -18 -50
-33 -19 -15 -42 -29 -50 -32 -24 -9 -242 -201 -272 -239 -15 -19 -45 -54 -67
-79 -23 -25 -54 -63 -69 -85 -15 -22 -30 -41 -34 -43 -5 -2 -8 -7 -8 -12 0 -5
-16 -32 -35 -62 -20 -29 -54 -91 -76 -138 -22 -47 -46 -97 -54 -112 -8 -14
-15 -32 -15 -39 0 -18 -34 -88 -42 -89 -4 0 -58 51 -120 114 -62 63 -142 137
-178 165 -36 28 -69 54 -75 58 -76 61 -389 233 -423 233 -8 0 -26 6 -40 14
-57 29 -198 76 -230 76 -13 0 -33 5 -45 12 -35 19 -257 52 -437 67 -109 8
-231 3 -435 -18 -75 -7 -100 -12 -215 -41 -25 -6 -63 -15 -85 -20 -22 -4 -56
-13 -75 -20 -100 -36 -117 -43 -143 -56 -16 -8 -35 -14 -42 -14 -13 0 -29 -7
-115 -51 -163 -83 -281 -156 -340 -208 -25 -22 -55 -41 -68 -41 -22 0 -22 2
-16 73 4 39 13 87 20 106 8 18 14 48 14 65 0 17 6 51 14 76 8 25 22 72 31 105
9 33 22 71 27 85 6 14 14 41 18 60 5 19 14 51 20 70 22 62 42 114 55 145 7 17
21 50 30 75 23 62 37 95 72 170 17 36 39 85 49 110 30 73 218 439 254 495 11
17 24 40 29 51 5 12 17 24 26 28 9 3 190 6 403 6 275 0 396 3 421 12 58 20
130 82 453 395 l106 103 12 71 c7 39 9 85 6 102 -4 18 -10 70 -15 117 -5 47
-13 96 -19 110 -5 14 -18 52 -27 85 -10 33 -30 87 -46 120 -16 33 -29 65 -29
71 0 31 -158 243 -243 327 -82 82 -99 94 -153 110 -33 9 -80 17 -104 17 -25 0
-74 6 -110 15 -165 37 -609 54 -765 28z m608 -325 c10 -5 60 -12 110 -15 130
-7 166 -23 237 -103 33 -37 60 -72 60 -77 0 -6 9 -18 19 -27 27 -24 96 -169
116 -241 9 -33 21 -75 27 -93 5 -18 12 -56 15 -85 l5 -52 -120 -115 c-66 -63
-149 -141 -185 -172 l-65 -58 -426 0 -426 0 -40 -25 c-34 -21 -90 -91 -90
-111 0 -3 -13 -26 -30 -51 -16 -24 -30 -50 -30 -58 0 -8 -5 -17 -10 -20 -6 -4
-17 -21 -25 -38 -8 -18 -28 -54 -44 -82 -38 -64 -119 -228 -250 -505 -17 -36
-31 -72 -31 -80 0 -8 -7 -24 -15 -34 -8 -11 -15 -30 -15 -42 0 -12 -7 -27 -15
-34 -8 -7 -15 -20 -15 -30 0 -10 -13 -48 -29 -86 -36 -87 -52 -132 -58 -164
-2 -14 -9 -34 -14 -45 -5 -11 -16 -45 -25 -75 -8 -30 -20 -71 -25 -90 -6 -19
-15 -57 -21 -85 -5 -27 -14 -66 -20 -85 -29 -91 -67 -419 -67 -570 -1 -119 14
-224 36 -261 23 -39 83 -69 139 -69 43 0 49 4 112 69 221 227 280 285 326 316
28 20 69 49 91 65 22 16 72 45 110 65 39 20 77 40 85 45 14 7 46 21 123 54 93
39 207 76 238 76 13 1 35 7 49 15 14 8 43 15 65 15 22 0 67 7 100 15 70 17
459 20 540 4 28 -5 73 -14 100 -19 28 -5 66 -14 85 -19 19 -6 49 -11 65 -11
17 0 39 -6 50 -14 11 -7 31 -16 45 -19 67 -14 284 -111 385 -170 135 -80 292
-210 390 -323 72 -82 125 -149 125 -159 0 -3 11 -21 24 -38 13 -18 38 -63 56
-100 20 -41 49 -82 74 -103 35 -30 46 -34 96 -34 58 0 91 15 120 54 24 33 50
127 50 182 0 28 7 73 15 100 8 27 15 60 15 74 0 14 7 34 15 44 8 11 15 32 15
46 0 14 7 35 15 46 8 10 15 26 15 34 1 41 126 260 215 376 28 37 186 197 223
226 10 7 36 28 59 46 22 17 44 32 48 32 3 0 21 11 38 24 47 35 183 102 287
141 25 9 60 23 78 31 18 8 48 14 68 14 19 0 51 7 72 16 49 22 465 26 525 5 21
-7 61 -16 90 -21 29 -4 68 -13 87 -20 120 -43 160 -59 213 -86 16 -8 33 -14
38 -14 5 0 28 -12 52 -27 61 -40 80 -51 102 -62 11 -5 29 -17 40 -28 11 -10
38 -30 60 -45 51 -35 207 -195 266 -273 25 -33 61 -87 79 -120 18 -33 39 -67
46 -76 8 -8 14 -21 14 -28 0 -7 6 -25 14 -39 13 -25 24 -54 56 -142 7 -19 16
-53 20 -75 4 -22 13 -56 20 -75 19 -55 16 -495 -4 -590 -9 -41 -16 -89 -16
-106 0 -17 -7 -51 -15 -74 -8 -23 -15 -59 -15 -79 0 -21 -7 -46 -15 -57 -8
-10 -15 -30 -15 -44 0 -14 -7 -36 -15 -50 -8 -14 -14 -33 -15 -43 0 -10 -14
-45 -30 -79 -16 -33 -30 -68 -30 -78 0 -10 -7 -23 -15 -30 -8 -7 -15 -21 -15
-31 0 -10 -4 -20 -9 -23 -5 -3 -28 -38 -52 -78 -144 -240 -381 -454 -673 -608
-132 -69 -125 -66 -176 -85 -25 -9 -58 -23 -75 -30 -16 -7 -50 -20 -75 -30
-25 -9 -60 -23 -78 -31 -18 -8 -44 -14 -57 -14 -13 0 -39 -6 -57 -14 -18 -8
-60 -22 -93 -31 -33 -9 -80 -23 -105 -31 -25 -8 -59 -14 -76 -14 -17 0 -48 -7
-67 -15 -20 -8 -52 -15 -71 -15 -19 0 -47 -5 -63 -11 -29 -12 -82 -20 -243
-39 -52 -6 -129 -17 -170 -25 -41 -8 -142 -17 -225 -20 -82 -3 -170 -10 -195
-16 -64 -16 -1377 -15 -1445 1 -27 6 -142 15 -255 20 -194 8 -311 17 -530 41
-52 6 -131 14 -175 18 -81 8 -148 20 -262 47 -34 8 -75 14 -91 14 -17 0 -43 5
-59 11 -33 13 -133 38 -183 45 -19 3 -49 12 -67 20 -17 8 -42 14 -56 14 -14 0
-38 7 -53 15 -16 8 -37 15 -46 15 -10 0 -32 6 -50 14 -18 8 -60 22 -93 31 -33
10 -69 22 -80 28 -11 6 -33 14 -50 18 -16 4 -55 17 -85 29 -30 12 -69 26 -87
31 -18 5 -35 14 -38 19 -4 6 -16 10 -29 10 -12 0 -26 4 -32 9 -5 5 -54 28
-108 51 -54 23 -106 45 -115 50 -34 16 -147 68 -161 74 -8 3 -22 10 -30 15 -8
5 -33 18 -55 29 -22 11 -56 29 -75 41 -19 11 -42 23 -50 27 -8 3 -22 10 -30
15 -8 5 -28 15 -45 23 -16 8 -52 28 -80 45 -27 16 -67 39 -87 50 -21 11 -57
33 -80 48 -57 37 -80 51 -97 59 -27 14 -417 280 -431 294 -3 3 -44 35 -92 71
-48 37 -128 100 -177 140 -75 61 -90 79 -91 103 0 27 17 116 42 216 6 25 13
63 16 85 2 22 11 49 18 60 8 11 14 30 14 42 0 12 6 40 14 60 7 21 21 65 31 98
9 33 23 75 31 93 8 18 14 43 14 55 0 12 7 31 15 41 8 11 15 28 15 39 0 10 6
31 14 45 8 15 21 47 31 72 9 25 23 58 31 73 8 16 14 35 14 43 0 8 20 56 43
107 24 50 52 112 63 137 23 55 241 488 278 550 14 25 30 55 36 68 5 12 26 48
46 79 19 31 40 65 45 77 5 12 18 35 29 51 11 17 24 39 29 50 5 11 21 37 35 58
14 21 26 40 26 43 0 4 14 26 30 51 17 24 30 46 30 48 0 3 19 33 43 68 24 34
47 69 51 77 17 36 87 144 97 150 4 3 13 17 18 30 6 14 40 66 76 115 35 50 84
119 109 155 103 150 152 218 195 277 25 33 55 74 66 89 11 15 30 40 43 55 12
15 22 31 22 37 0 5 7 15 15 22 9 7 50 59 92 114 105 138 232 300 328 416 44
54 105 128 135 165 30 38 83 100 118 138 34 39 62 74 62 79 0 11 56 40 110 56
25 8 83 18 130 22 109 10 529 1 553 -12z"/>
<path d="M6960 4640 c-87 -11 -168 -29 -208 -46 -18 -8 -39 -14 -46 -14 -23 0
-207 -99 -261 -139 -78 -59 -193 -179 -244 -254 -67 -100 -80 -120 -87 -137
-10 -25 -65 -144 -75 -162 -5 -10 -13 -34 -18 -55 -5 -21 -14 -51 -19 -68 -18
-51 -33 -118 -42 -175 -32 -210 -33 -221 -21 -260 17 -57 55 -96 110 -115 44
-14 53 -15 86 -1 63 27 88 54 107 114 10 31 18 83 18 115 0 61 22 168 46 225
8 18 14 42 14 53 0 12 6 33 13 47 8 15 21 42 30 60 9 19 17 38 17 44 0 5 14
30 30 55 17 24 30 47 30 50 0 8 56 75 112 134 148 158 390 239 670 226 156 -8
180 -3 228 46 37 36 40 44 40 93 0 69 -26 119 -77 146 -33 18 -59 21 -213 23
-96 2 -204 -1 -240 -5z"/>
<path d="M807 3616 c-34 -36 -71 -82 -82 -103 -10 -21 -24 -45 -31 -53 -6 -8
-14 -24 -17 -35 -3 -11 -15 -45 -27 -75 -43 -110 -57 -221 -35 -273 16 -40 81
-117 97 -117 6 0 27 -13 47 -28 20 -16 56 -39 81 -51 25 -12 52 -26 60 -30 8
-4 33 -16 55 -25 22 -10 53 -24 68 -32 16 -8 36 -14 46 -14 9 0 25 -6 36 -14
11 -7 34 -16 50 -19 17 -3 66 -17 110 -32 44 -15 94 -31 110 -37 17 -6 41 -12
55 -14 14 -3 42 -10 62 -16 28 -8 47 -7 83 3 84 25 129 108 105 193 -21 78
-63 103 -240 146 -39 9 -89 26 -138 46 -18 8 -41 14 -50 14 -10 0 -27 7 -38
15 -10 8 -27 15 -37 15 -11 0 -31 6 -45 14 -15 8 -47 22 -72 32 -25 10 -52 23
-60 30 -8 6 -24 14 -35 16 -16 3 -20 11 -19 39 1 43 44 136 82 181 75 87 88
141 50 207 -33 57 -76 81 -148 81 l-60 0 -63 -64z"/>
<path d="M2318 3145 c-47 -32 -78 -83 -78 -128 0 -74 70 -154 267 -302 61 -47
115 -85 118 -85 4 0 24 -13 45 -30 21 -16 41 -30 46 -30 4 0 15 -6 23 -14 23
-19 127 -77 261 -143 119 -58 145 -70 220 -98 25 -9 60 -23 78 -31 18 -8 43
-14 55 -14 13 0 28 -5 35 -12 6 -6 33 -15 59 -19 27 -4 66 -12 88 -18 187 -49
429 -69 618 -52 73 6 160 18 194 26 34 8 75 15 93 15 17 0 41 5 53 12 12 6 40
15 62 19 43 7 70 16 185 61 88 35 139 57 160 69 8 5 22 12 30 15 27 11 95 45
115 57 10 7 37 23 60 37 22 13 49 30 60 37 11 7 29 17 40 22 57 28 171 129
194 173 22 42 24 50 13 86 -7 22 -21 51 -33 66 -26 33 -89 66 -125 66 -31 0
-114 -46 -227 -125 -43 -30 -82 -55 -87 -55 -5 0 -26 -11 -46 -25 -68 -46
-255 -129 -349 -155 -16 -5 -43 -13 -60 -18 -97 -32 -136 -42 -166 -42 -19 -1
-61 -7 -94 -15 -71 -17 -335 -20 -440 -4 -155 23 -219 37 -290 61 -16 5 -46
14 -65 18 -19 4 -60 18 -90 30 -30 12 -65 24 -77 27 -12 3 -28 11 -34 19 -6 8
-20 14 -30 14 -15 0 -88 36 -139 70 -8 6 -22 13 -30 16 -8 3 -22 10 -30 15 -8
5 -24 14 -35 19 -11 6 -33 19 -50 30 -16 11 -40 25 -52 31 -13 7 -23 16 -23
21 0 4 -5 8 -11 8 -9 0 -126 84 -139 100 -3 4 -28 24 -55 46 -28 21 -70 57
-93 79 -67 61 -93 75 -142 75 -32 0 -56 -7 -82 -25z"/>
</g>
</svg>


    )
}

export default Arms
