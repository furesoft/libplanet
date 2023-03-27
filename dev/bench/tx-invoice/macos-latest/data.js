window.BENCHMARK_DATA = {
  "lastUpdate": 1679900973331,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "12163fe108b4505f0d99df93d9f203433580d4da",
          "message": "WIP",
          "timestamp": "2023-03-24T18:58:26+09:00",
          "tree_id": "826e80a5e0b2b83e09fc95e946af26b77acc2356",
          "url": "https://github.com/planetarium/libplanet/commit/12163fe108b4505f0d99df93d9f203433580d4da"
        },
        "date": 1679653082470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8702710.078947369,
            "unit": "ns",
            "range": "± 293195.0496346022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21788926.33870968,
            "unit": "ns",
            "range": "± 624266.8576730145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51774477.741935484,
            "unit": "ns",
            "range": "± 1201282.286283452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111829414.21052632,
            "unit": "ns",
            "range": "± 1975066.4222609373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235844566.1818182,
            "unit": "ns",
            "range": "± 11071561.192764502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75608.93181818182,
            "unit": "ns",
            "range": "± 5767.607882385295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347079.875,
            "unit": "ns",
            "range": "± 28496.605706045142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339991.75531914894,
            "unit": "ns",
            "range": "± 44008.20793938628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311797.5729166667,
            "unit": "ns",
            "range": "± 36282.44654019345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4813631.552083333,
            "unit": "ns",
            "range": "± 368335.7770353987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4445463.132653061,
            "unit": "ns",
            "range": "± 313872.3566985024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20158.427835051545,
            "unit": "ns",
            "range": "± 3447.5631316658014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92863.6052631579,
            "unit": "ns",
            "range": "± 16598.979915128646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104888.82631578947,
            "unit": "ns",
            "range": "± 17662.016331148232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 271202.04347826086,
            "unit": "ns",
            "range": "± 35518.12703686499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8916.58510638298,
            "unit": "ns",
            "range": "± 1560.3603227347976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20135.531914893618,
            "unit": "ns",
            "range": "± 3563.4361194590133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663321.9393939395,
            "unit": "ns",
            "range": "± 214334.01134910042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2956879.6481481483,
            "unit": "ns",
            "range": "± 121632.53426770035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2471385.085106383,
            "unit": "ns",
            "range": "± 139294.171786671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6577324.653846154,
            "unit": "ns",
            "range": "± 178640.65007963718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3754290.6555555556,
            "unit": "ns",
            "range": "± 389331.62321220984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3782744.2083333335,
            "unit": "ns",
            "range": "± 378824.69422450924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4570733.387096774,
            "unit": "ns",
            "range": "± 206696.75306715255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5154281.934065934,
            "unit": "ns",
            "range": "± 873896.8202363073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10253571.516129032,
            "unit": "ns",
            "range": "± 1053701.6331969944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6924208.615274235,
            "unit": "ns",
            "range": "± 418575.58542385045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2135697.1108072917,
            "unit": "ns",
            "range": "± 63468.956729351274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422132.3902803308,
            "unit": "ns",
            "range": "± 28181.76352018908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706971.396484375,
            "unit": "ns",
            "range": "± 149945.59591036712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 892138.5196484375,
            "unit": "ns",
            "range": "± 23057.253483917626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800329.3404756434,
            "unit": "ns",
            "range": "± 16344.494848615535"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "93bbbf10f6e654bff312e1d71d40c8ee1c36d884",
          "message": "WIP",
          "timestamp": "2023-03-27T13:14:26+09:00",
          "tree_id": "ba5ebada552297745c2adbf08bfb456eb2452192",
          "url": "https://github.com/planetarium/libplanet/commit/93bbbf10f6e654bff312e1d71d40c8ee1c36d884"
        },
        "date": 1679891362517,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7933119.7441860465,
            "unit": "ns",
            "range": "± 292531.9275760131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18872564.88,
            "unit": "ns",
            "range": "± 468263.8398021746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47759718.43478261,
            "unit": "ns",
            "range": "± 1202696.8872884966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97295823.02,
            "unit": "ns",
            "range": "± 4888374.573357691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195487501.75,
            "unit": "ns",
            "range": "± 2373321.9998186324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69798.37894736842,
            "unit": "ns",
            "range": "± 9424.410219346926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325509.0894736842,
            "unit": "ns",
            "range": "± 26822.906479150424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297756.48,
            "unit": "ns",
            "range": "± 11976.751946728687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279677.8333333333,
            "unit": "ns",
            "range": "± 16904.34320314825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4255186,
            "unit": "ns",
            "range": "± 107322.78220194079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3799279.6666666665,
            "unit": "ns",
            "range": "± 98443.26663030923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18369.045977011494,
            "unit": "ns",
            "range": "± 1662.6846035507726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100849.86,
            "unit": "ns",
            "range": "± 15332.630849863366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95044.89690721649,
            "unit": "ns",
            "range": "± 14836.288444276122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 230374.9301075269,
            "unit": "ns",
            "range": "± 20279.542023491606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6089.460674157303,
            "unit": "ns",
            "range": "± 1025.6107720876705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17785.440860215054,
            "unit": "ns",
            "range": "± 1996.9556692210354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685532.1224489796,
            "unit": "ns",
            "range": "± 208195.57223552975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3010978.1779661016,
            "unit": "ns",
            "range": "± 130175.96678825388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2730992.210526316,
            "unit": "ns",
            "range": "± 235133.01188683923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6715779.346153846,
            "unit": "ns",
            "range": "± 182009.5456515822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3105531.414893617,
            "unit": "ns",
            "range": "± 116029.29077979477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3278447.8484848486,
            "unit": "ns",
            "range": "± 153099.11186028304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277458.083333333,
            "unit": "ns",
            "range": "± 176098.23058527338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4470791.316666666,
            "unit": "ns",
            "range": "± 198235.4788012882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8867355.666666666,
            "unit": "ns",
            "range": "± 319589.0785406951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6250317.177884615,
            "unit": "ns",
            "range": "± 41471.7172896617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954152.9095552885,
            "unit": "ns",
            "range": "± 15873.772329623702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223643.3329326923,
            "unit": "ns",
            "range": "± 3849.525733627924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2402634.9754464286,
            "unit": "ns",
            "range": "± 15003.869753075216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835415.1423688616,
            "unit": "ns",
            "range": "± 3856.6530837768005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 699873.3738839285,
            "unit": "ns",
            "range": "± 4735.683253318222"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "9f69d9779586c45eab916afe354cddb92110b490",
          "message": "Introduce TxInvoice & UnsignedTx\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-27T15:49:56+09:00",
          "tree_id": "59d858b6e6543dafab428524506d74ffd69733e1",
          "url": "https://github.com/planetarium/libplanet/commit/9f69d9779586c45eab916afe354cddb92110b490"
        },
        "date": 1679900937403,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9077501.594736842,
            "unit": "ns",
            "range": "± 755947.2090395623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23748271.9,
            "unit": "ns",
            "range": "± 3061080.918838506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55536042.9,
            "unit": "ns",
            "range": "± 1940432.906820442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121753685.90845071,
            "unit": "ns",
            "range": "± 5924329.866428835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209062959.9722222,
            "unit": "ns",
            "range": "± 6770431.533446385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69260.68085106384,
            "unit": "ns",
            "range": "± 9373.161974618015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372993.6458333333,
            "unit": "ns",
            "range": "± 55685.619071237146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352227.2967032967,
            "unit": "ns",
            "range": "± 44758.404830699306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310845.4505494505,
            "unit": "ns",
            "range": "± 25371.89414873769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4433189.571428572,
            "unit": "ns",
            "range": "± 125626.87219004527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4409357.073684211,
            "unit": "ns",
            "range": "± 429533.01219499175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23948.36170212766,
            "unit": "ns",
            "range": "± 4403.830609799588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110582.5,
            "unit": "ns",
            "range": "± 24203.480557598337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102799.14285714286,
            "unit": "ns",
            "range": "± 16623.673506959265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248943.64516129033,
            "unit": "ns",
            "range": "± 24745.915096209475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7597.903225806452,
            "unit": "ns",
            "range": "± 1760.838461744588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22686.626315789475,
            "unit": "ns",
            "range": "± 4516.206095221173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1641567.702020202,
            "unit": "ns",
            "range": "± 186430.47228784507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3048872.7837837837,
            "unit": "ns",
            "range": "± 152868.96992267508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2500603.9081632653,
            "unit": "ns",
            "range": "± 202557.88229850345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6845161.875,
            "unit": "ns",
            "range": "± 285062.70540787483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3670325.1914893617,
            "unit": "ns",
            "range": "± 379080.5324252448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3703489.4270833335,
            "unit": "ns",
            "range": "± 308790.4616973593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4875918.826530612,
            "unit": "ns",
            "range": "± 414474.0105889962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4925078.1,
            "unit": "ns",
            "range": "± 465133.0255845247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9542257.58064516,
            "unit": "ns",
            "range": "± 641713.29529438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7627087.104403409,
            "unit": "ns",
            "range": "± 239580.982229464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2162452.2669921876,
            "unit": "ns",
            "range": "± 48192.35013899359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384146.4388950893,
            "unit": "ns",
            "range": "± 32509.24259211905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2760722.425841656,
            "unit": "ns",
            "range": "± 180579.04248674156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 923202.1900137442,
            "unit": "ns",
            "range": "± 38663.93116279172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778814.1070963541,
            "unit": "ns",
            "range": "± 21293.3324176341"
          }
        ]
      }
    ]
  }
}